import React, { useState, useEffect } from 'react';
import EventListItem from './EventListItem.jsx';

export default function ApiEventList({ openModal, onEventClose }) {
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
                
                // Adapt the 'todos' data to resemble events with unique IDs
                const adaptedEvents = result.todos.map(todo => ({
                    id: `api-${todo.id}`, // Prefix API IDs to make them unique
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

    // Handle deletion of API events
    const handleDeleteEvent = (eventId) => {
        setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
        onEventClose(eventId);
    };

    if (isLoading) {
        return <div className="api-status">Loading API Events...</div>;
    }

    if (error) {
        return <div className="api-status api-error">Error loading events: {error.message}</div>;
    }

    return (
        <>
            <h2 style={{ marginBottom: '20px', color: 'var(--text)' }}>Upcoming API Events (from DummyJSON Todos)</h2>
            <section className="event-list-wrapper">
                <ul className="event-list">
                    {events.map((event) => (
                        <EventListItem
                            key={event.id}
                            event={event}
                            openModal={openModal}
                            onClose={() => handleDeleteEvent(event.id)}
                        />
                    ))}
                </ul>
                {events.length === 0 && (
                    <p className="no-events">No events found</p>
                )}
            </section>
        </>
    );
}