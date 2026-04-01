import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Layout from './components/Layout.jsx';
import EventModal from './components/EventModal.jsx';
import HomePage from './pages/HomePage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import EventDetailPage from './pages/EventDetailPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { SettingsProvider } from './context/SettingsContext.jsx';

function App() {
    // Events state (localStorage)
    const [events, setEvents] = useState(() => {
        const savedEvents = localStorage.getItem('events_data');
        if (savedEvents) {
            try {
                return JSON.parse(savedEvents);
            } catch (error) {
                console.error("Error parsing localStorage data:", error);
                return [];
            }
        }
        return [
            { id: 1, status: 'Planned', title: 'Birthday Party', date: '2026-05-12', time: '18:00', location: '123 Main St, Anytown' },
            { id: 2, status: 'Completed', title: 'Conference', date: '2026-06-15', time: '09:00', location: '456 Elm St, Othertown' },
            { id: 3, status: 'Canceled', title: 'Wedding', date: '2026-10-10', time: '15:00', location: '789 Oak St, Sometown' },
            { id: 4, status: 'Completed', title: 'Art Exhibition', date: '2026-09-05', time: '10:00', location: 'Gallery XYZ, Artcity' },
            { id: 5, status: 'Canceled', title: 'Music Festival', date: '2026-08-20', time: '12:00', location: 'Central Park, Bigcity' },
            { id: 6, status: 'Planned', title: 'Tech Meetup', date: '2026-07-30', time: '19:00', location: 'Tech Hub, Innovatown' }
        ];
    });

    // UI filter & modal state
    const [filter, setFilter] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    // selectedEvent lives here so openModal works from any page (e.g. Header button)
    const [selectedEvent, setSelectedEvent] = useState(null);

    // Save events to localStorage
    useEffect(() => {
        localStorage.setItem('events_data', JSON.stringify(events));
    }, [events]);

    // openModal accepts an optional event object (null = "Add new" mode)
    const openModal = (event = null) => {
        setSelectedEvent(event || null);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setSelectedEvent(null);
        setIsModalOpen(false);
    };

    // Add or update event
    const handleEventSubmit = (eventData) => {
        const existingEvent = events.find(event => event.id === eventData.id);
        if (existingEvent) {
            setEvents(events.map(event =>
                event.id === eventData.id ? eventData : event
            ));
        } else {
            setEvents([...events, eventData]);
        }
        closeModal();
    };

    // Remove event
    const handleDeleteEvent = (eventId) => {
        setEvents(events.filter(event => event.id !== eventId));
    };

    return (
        // ThemeProvider and SettingsProvider wrap the entire app tree —
        // any component can now call useTheme() or useSettings() without prop drilling.
        <ThemeProvider>
            <SettingsProvider>
                <Routes>
                    {/* Layout component as nested route wrapper (no path) */}
                    <Route element={<Layout openModal={openModal} />}>
                        <Route index element={<HomePage events={events} />} />
                        <Route path="events" element={
                            <EventsPage
                                events={events}
                                handleDeleteEvent={handleDeleteEvent}
                                filter={filter}
                                setFilter={setFilter}
                                openModal={openModal}
                            />
                        } />
                        <Route path="event/:id" element={
                            <EventDetailPage events={events} />
                        } />
                        <Route path="about" element={<AboutPage />} />
                        {/* Redirect /home → / */}
                        <Route path="home" element={<Navigate to="/" replace />} />
                        {/* 404 — must be last */}
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>

                {/* Modal lives outside Routes so it works on every page */}
                <EventModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    eventData={selectedEvent}
                    onSubmit={handleEventSubmit}
                />
            </SettingsProvider>
        </ThemeProvider>
    );
}

export default App
