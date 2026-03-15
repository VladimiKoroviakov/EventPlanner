import EventForm from '../components/EventForm';

export default function EventModal({ isOpen, onClose, eventData = null, onSubmit }) {
    if (!isOpen) return null;

    const isEditing = eventData !== null;

    const handleSubmit = (eventDetails) => {
        onSubmit(eventDetails);
        onClose();
    };

    return (
        <div className="event-modal-bg" onClick={onClose}>
            <div className="event-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.0625 10L0 8.9375L3.9375 5L0 1.0625L1.0625 0L5 3.9375L8.9375 0L10 1.0625L6.0625 5L10 8.9375L8.9375 10L5 6.0625L1.0625 10Z" fill="#4D4D4D"/>
                    </svg>
                </button>
                <h2>{isEditing ? 'Edit Event' : 'New Event'}</h2>
                <EventForm 
                    isEditing={isEditing}
                    eventData={eventData}
                    onSubmit={handleSubmit}
                    onCancel={onClose}
                />
            </div>
        </div>
    );
}