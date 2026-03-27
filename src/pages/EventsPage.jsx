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
    const [source, setSource] = useState('local');

    return (
        <main className="main">
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                filter={filter}
                setFilter={setFilter}
            />

            {source === 'local' ? (
                <EventList
                    events={events}
                    filter={filter}
                    searchTerm={searchTerm}
                    openModal={openModal}
                    onEventClose={handleDeleteEvent}
                />
            ) : (
                <ApiEventList
                    filter={filter}
                    searchTerm={searchTerm}
                    openModal={openModal}
                    onEventClose={handleDeleteEvent}
                />
            )}

            <div className="source-switcher">
                <button
                    className={`source-switcher__btn${source === 'local' ? ' active' : ''}`}
                    onClick={() => setSource('local')}
                >
                    My Events
                </button>
                <button
                    className={`source-switcher__btn${source === 'api' ? ' active' : ''}`}
                    onClick={() => setSource('api')}
                >
                    API Events
                </button>
            </div>
        </main>
    );
}
