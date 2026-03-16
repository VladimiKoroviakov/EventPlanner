import './App.css'
import { useState, useEffect } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

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

    // Theme state (localStorage)
    const [dark, setDark] = useState(() => {
        const savedTheme = localStorage.getItem('dark_mode');
        return savedTheme === 'true';
    });

    // UI filter & modal state
    const [filter, setFilter] = useState('all');
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Save events to localStorage
    useEffect(() => {
        localStorage.setItem('events_data', JSON.stringify(events));
    }, [events]);

    // Save theme & apply class
    useEffect(() => {
        localStorage.setItem('dark_mode', dark);
        const root = document.documentElement;
        if (dark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [dark]);

    // Theme & modal handlers
    const toggleTheme = () => setDark(prev => !prev);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
    };

    // Remove events 
    const handleDeleteEvent = (eventId) => {
        setEvents(events.filter(event => event.id !== eventId));
    };

    return (
        <div className="app">
            <Header openModal={openModal} dark={dark} toggleTheme={toggleTheme} />
            <Main 
                events={events} 
                handleEventSubmit={handleEventSubmit}
                handleDeleteEvent={handleDeleteEvent}
                filter={filter}
                setFilter={setFilter}
                isModalOpen={isModalOpen} 
                closeModal={closeModal} 
                openModal={openModal}
            /> 
            <Footer />
        </div>
    )
}

export default App