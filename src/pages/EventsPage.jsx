import { useState } from 'react';
import EventList from '../components/EventList.jsx';
import SearchBar from '../components/SearchBar.jsx';
import ApiEventList from '../components/ApiEventList.jsx';
import { useSettings } from '../context/SettingsContext.jsx';

export default function EventsPage({
    events = [],
    handleDeleteEvent,
    filter,
    setFilter,
    openModal,
}) {
    const { t } = useSettings();
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
                    {t.myEvents}
                </button>
                <button
                    className={`source-switcher__btn${source === 'api' ? ' active' : ''}`}
                    onClick={() => setSource('api')}
                >
                    {t.apiEventsTab}
                </button>
            </div>
        </main>
    );
}
