import EventListItem from './EventListItem.jsx';

export default function EventList({ onEventClose, openModal, events = [] }) {
    
    return (
        <div className="event-list-wrapper">
            <ul className="event-list">
                {events.map((event) => (
                    <EventListItem
                        key={event.id}
                        event={event}
                        openModal={openModal}
                        onClose={onEventClose ? () => onEventClose(event.id) : undefined}
                    />
                ))}
            </ul>
        </div>
    );
}