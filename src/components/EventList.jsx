import EventListItem from './EventListItem.jsx';
import { useSettings } from '../context/SettingsContext.jsx';

export default function EventList({ onEventClose, openModal, events = [], filter, searchTerm }) {
    const { t } = useSettings();
    
    // Filtering functionality
    const filteredEvents = events.filter(event => {
        const matchesSearch = searchTerm === '' || 
            event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (!matchesSearch) return false;
        
        if (filter === 'all') return true;
        if (filter === 'upcoming') {
            const today = new Date().toISOString().split('T')[0];
            return event.date >= today && event.status !== 'Canceled' && event.status !== 'Completed';
        }
        if (filter === 'past') {
            const today = new Date().toISOString().split('T')[0];
            return event.date < today;
        }

        return event.status.toLowerCase() === filter.toLowerCase();
    });
    
    return (
        <div className="event-list-wrapper">
            <ul className="event-list">
                {filteredEvents.map((event) => (
                    <EventListItem
                        key={event.id}
                        event={event}
                        openModal={openModal}
                        onClose={() => onEventClose(event.id)}
                    />
                ))}
            </ul>
            {filteredEvents.length === 0 && (
                <p className="no-events">{t.noEventsFound}</p>
            )}
        </div>
    );
}