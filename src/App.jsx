import './App.css'
import { useState } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
    const events = [
        {
            id: 1,
            status: 'Planned',
            title: 'Birthday Party',
            date: '12.05.2026',
            time: '18:00',
            location: '123 Main St, Anytown'
        },
        {
            id: 2,
            status: 'Completed',
            title: 'Conference',
            date: '15.06.2026',
            time: '09:00',
            location: '456 Elm St, Othertown'
        },
        {
            id: 3,
            status: 'Canceled',
            title: 'Wedding',
            date: '10.10.2026',
            time: '15:00',
            location: '789 Oak St, Sometown'
        },
        {
            id: 4,
            status: 'Completed',
            title: 'Art Exhibition',
            date: '05.09.2026',
            time: '10:00',
            location: 'Gallery XYZ, Artcity'
        },
        {
            id: 5,
            status: 'Canceled',
            title: 'Music Festival',
            date: '20.08.2026',
            time: '12:00',
            location: 'Central Park, Bigcity'
        },
        {
            id: 6,
            status: 'Planned',
            title: 'Tech Meetup',
            date: '30.07.2026',
            time: '19:00',
            location: 'Tech Hub, Innovatown'
        }, 
    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleEventSubmit = (eventData) => {
        console.log('Event data:', eventData);
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
            /> 
            <Footer />
        </div>
    )
}

export default App
