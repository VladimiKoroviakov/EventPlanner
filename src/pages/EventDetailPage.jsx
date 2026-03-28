import { useParams, Link, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import EventDetail from '../components/EventDetail.jsx';
import StatusBadge from '../components/StatusBadge.jsx';

export default function EventDetailPage({ events = [], loading = false }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [apiEvent, setApiEvent] = useState(null);
    const [apiLoading, setApiLoading] = useState(false);
    const [apiError, setApiError] = useState(null);

    const isApiEvent = id.startsWith('api-');

    useEffect(() => {
        if (!isApiEvent) return;
        const todoId = id.replace('api-', '');
        async function fetchTodo() {
            setApiLoading(true);
            try {
                const res = await fetch(`https://dummyjson.com/todos/${todoId}`);
                if (!res.ok) throw new Error('Not found');
                const todo = await res.json();
                setApiEvent({
                    id: `api-${todo.id}`,
                    status: todo.completed ? 'Completed' : 'Planned',
                    title: todo.todo,
                    date: '2024-12-31',
                    time: '18:00',
                    location: 'Online'
                });
            } catch {
                setApiError(true);
            } finally {
                setApiLoading(false);
            }
        }
        fetchTodo();
    }, [id, isApiEvent]);

    if (loading || apiLoading) {
        return (
            <main className="main">
                <section className="panel">
                    <p className="status-msg">Loading event details…</p>
                </section>
            </main>
        );
    }

    const event = isApiEvent ? apiEvent : events.find(e => String(e.id) === id);

    if (!event || apiError) {
        return (
            <main className="main">
                <section className="panel event-detail-page__not-found">
                    <h2>Event Not Found</h2>
                    <p>
                        Sorry, the event with ID <strong>{id}</strong> does not exist in your list.
                    </p>
                    <Link to="/events" className="back-link">← Return to Events</Link>
                </section>
            </main>
        );
    }

    return (
        <main className="main">
            <section className="panel event-detail-page">
                <div className="event-detail-page__nav">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        ← Back
                    </button>
                    <Link to="/events" className="back-link">All Events</Link>
                </div>

                <div className="event-detail-page__card">
                    <div className="event-detail-page__header">
                        <StatusBadge status={event.status} />
                        <span className="event-detail-page__id">ID: {event.id}</span>
                    </div>

                    <h2 className="event-detail-page__title">{event.title}</h2>

                    <div className="event-detail-page__info">
                        <EventDetail label="Date" eventDetail={event.date} eventDetailType="date" />
                        <EventDetail label="Time" eventDetail={event.time} eventDetailType="time" />
                        <EventDetail label="Location" eventDetail={event.location} eventDetailType="location" />
                    </div>
                </div>
            </section>
        </main>
    );
}
