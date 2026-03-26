import { useState } from 'react';
import EventList from '../components/EventList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import EventModal from '../components/EventModal.jsx';
import ApiEventList from '../components/ApiEventList.jsx';

export default function EventsPage({
    events = [],
    handleEventSubmit,
    handleDeleteEvent,
    filter,
    setFilter,
    isModalOpen,
    closeModal,
    openModal,
}) {
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
            <ApiEventList
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
