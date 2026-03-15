import { useState } from 'react';
import EventModal from './EventModal.jsx';
import EventList from './EventList.jsx';
import SearchBar from './SearchBar.jsx';

export default function Main({ isModalOpen, closeModal, openModal, filter, setFilter, handleEventSubmit, handleDeleteEvent, events = [] }) {

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleOpenModal = (event) => {
        setSelectedEvent(event || null);
        openModal();
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
        closeModal();
    };

    const handleSubmit = (eventData) => {
        handleEventSubmit(eventData);
        handleCloseModal();
    };

    return (
        <main className="main">
            <SearchBar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm}
                filter={filter}
                setFilter={setFilter}
            />
            <EventList 
                events={events} 
                filter={filter}
                searchTerm={searchTerm} 
                openModal={handleOpenModal} 
                onEventClose={handleDeleteEvent}
            />
            <EventModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                eventData={selectedEvent}
                onSubmit={handleSubmit}
            />
        </main>
    );
}