import { useState } from 'react';
import EventList from '../components/EventList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ApiEventList from '../components/ApiEventList.jsx';

export default function EventsPage({
    events = [],
    handleDeleteEvent,
    filter,
    setFilter,
    openModal,
}) {
    const [searchTerm, setSearchTerm] = useState('');

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
                openModal={openModal}
                onEventClose={handleDeleteEvent}
            />
            <ApiEventList
                openModal={openModal}
                onEventClose={handleDeleteEvent}
            />
        </main>
    );
}
