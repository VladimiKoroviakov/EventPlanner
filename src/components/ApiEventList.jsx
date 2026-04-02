import React, { useState, useEffect } from 'react';
import EventListItem from './EventListItem.jsx';
import { useSettings } from '../context/SettingsContext.jsx';

export default function ApiEventList({ openModal, onEventClose, filter = 'all', searchTerm = '' }) {
    const { t } = useSettings();
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApiEvents = async () => {
            try {
                const response = await fetch('https://dummyjson.com/todos?limit=10');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();

                const adaptedEvents = result.todos.map(todo => ({
                    id: `api-${todo.id}`,
                    status: todo.completed ? 'Completed' : 'Planned',
                    title: todo.todo,
                    date: '2024-12-31',
                    time: '18:00',
                    location: 'Online'
                }));
                setEvents(adaptedEvents);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchApiEvents();
    }, []);

    const handleDeleteEvent = (eventId) => {
        setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
        onEventClose(eventId);
    };

    const filteredEvents = events.filter(event => {
        const matchesSearch = searchTerm === '' ||
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase());

        if (!matchesSearch) return false;

        if (filter === 'all') return true;
        if (filter === 'upcoming') {
            const today = new Date().toISOString().split('T')[0];
            return event.date >= today && event.status !== 'Canceled' && event.status !== 'Completed';
        }
        if (filter === 'past') {
            const today = new Date().toISOString().split('T')[0];
            return event.date < today;
        }

        return event.status.toLowerCase() === filter.toLowerCase();
    });

    if (isLoading) {
        return <div className="api-status">{t.apiLoading}</div>;
    }

    if (error) {
        return <div className="api-status api-error">{t.apiError} {error.message}</div>;
    }

    return (
        <>
            <h2 className="api-event-list__title">
                {t.apiEventsTitle} <span>{t.apiEventsSource}</span>
            </h2>
            <section className="event-list-wrapper">
                <ul className="event-list">
                    {filteredEvents.map((event) => (
                        <EventListItem
                            key={event.id}
                            event={event}
                            openModal={openModal}
                            onClose={() => handleDeleteEvent(event.id)}
                        />
                    ))}
                </ul>
                {filteredEvents.length === 0 && (
                    <p className="no-events">{t.noEventsFound}</p>
                )}
            </section>
        </>
    );
}
