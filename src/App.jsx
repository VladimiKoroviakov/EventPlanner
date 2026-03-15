import './App.css'
import { useState } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
    const [events, setEvents] = useState([
        { id: 1, status: 'Planned', title: 'Birthday Party', date: '2026-05-12', time: '18:00', location: '123 Main St, Anytown' },
        { id: 2, status: 'Completed', title: 'Conference', date: '2026-06-15', time: '09:00', location: '456 Elm St, Othertown' },
        { id: 3, status: 'Canceled', title: 'Wedding', date: '2026-10-10', time: '15:00', location: '789 Oak St, Sometown' },
        { id: 4, status: 'Completed', title: 'Art Exhibition', date: '2026-09-05', time: '10:00', location: 'Gallery XYZ, Artcity' },
        { id: 5, status: 'Canceled', title: 'Music Festival', date: '2026-08-20', time: '12:00', location: 'Central Park, Bigcity' },
        { id: 6, status: 'Planned', title: 'Tech Meetup', date: '2026-07-30', time: '19:00', location: 'Tech Hub, Innovatown' }
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Adding or editing event
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

    // Deleting event
    const handleDeleteEvent = (eventId) => {
        setEvents(events.filter(event => event.id !== eventId));
    };

    return (
        <div className="app">
            <Header openModal={openModal} />
            <Main 
                events={events} 
                isModalOpen={isModalOpen} 
                closeModal={closeModal} 
                openModal={openModal}
                handleEventSubmit={handleEventSubmit}
                handleDeleteEvent={handleDeleteEvent}
            /> 
            <Footer />
        </div>
    )
}

export default App
