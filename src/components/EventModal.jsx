export default function EventModal({ isOpen, onClose, eventData = null, onSubmit }) {
    if (!isOpen) return null;

    const isEditing = eventData !== null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const eventDetails = {
            id: isEditing ? eventData.id : Date.now(),
            title: formData.get('event-name'),
            location: formData.get('event-location'),
            date: formData.get('event-date'), 
            time: formData.get('event-time'),
            status: formData.get('event-status').charAt(0).toUpperCase() + 
                    formData.get('event-status').slice(1)
        };
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
                <form className="event" onSubmit={handleSubmit}>
                    <div className="top">
                        <div className="field">
                            <label htmlFor="event-name">Name</label>
                            <div className="event-input event-name">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                                    <path d="M96 0v-192h768V0H96Zm96-288v-152.92L594-843q11-11 23.84-16 12.83-5 27-5 14.16 0 27.16 5t24.1 15.94L747-792q11 11 16 24t5 27.4q0 13.49-4.95 26.54-4.95 13.05-15.75 23.85L345-288H192Zm453-402 51-51-51-51-51 51 51 51Z"/>
                                </svg>
                                <input 
                                    type="text" 
                                    placeholder="Event Name..." 
                                    name="event-name" 
                                    defaultValue={isEditing ? eventData.title : ''}
                                    required 
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label htmlFor="event-location">Location</label>
                            <div className="event-input event-location">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                                    <path d="M531-501q21-21 21-51t-21-51q-21-21-51-21t-51 21q-21 21-21 51t21 51q21 21 51 21t51-21ZM480-96Q323-227 245.5-339.5T168-549q0-134 89-224.5T480-864q133 0 222.5 90.5T792-549q0 97-77 209T480-96Z"/>
                                </svg>
                                <input 
                                    type="text" 
                                    placeholder="Event Location..." 
                                    name="event-location" 
                                    defaultValue={isEditing ? eventData.location : ''}
                                    required 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="row">
                            <div className="date-time">
                                <label htmlFor="date">Date & Time</label>
                                <div className="date-time-inputs">
                                    <div className="event-input event-date">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                                            <path d="M480-400q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-188.5-11.5Q280-423 280-440t11.5-28.5Q303-480 320-480t28.5 11.5Q360-457 360-440t-11.5 28.5Q337-400 320-400t-28.5-11.5ZM640-400q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-188.5-11.5Q280-263 280-280t11.5-28.5Q303-320 320-320t28.5 11.5Q360-297 360-280t-11.5 28.5Q337-240 320-240t-28.5-11.5ZM640-240q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Z"/>
                                        </svg>
                                        <input 
                                            type="date" 
                                            name="event-date" 
                                            defaultValue={isEditing ? eventData.date : ''}
                                            required 
                                        />
                                    </div>
                                    <div className="event-input event-time">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                                            <path d="m614-310 51-51-149-149v-210h-72v240l170 170ZM480-96q-79.38 0-149.19-30T208.5-208.5Q156-261 126-330.96t-30-149.5Q96-560 126-630q30-70 82.5-122t122.46-82q69.96-30 149.5-30t149.55 30.24q70 30.24 121.79 82.08 51.78 51.84 81.99 121.92Q864-559.68 864-480q0 79.38-30 149.19T752-208.5Q700-156 629.87-126T480-96Z"/>
                                        </svg>
                                        <input 
                                            type="time" 
                                            name="event-time" 
                                            defaultValue={isEditing ? eventData.time : ''}
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="event-status">Status</label>
                                <div className="event-input event-status">
                                    <select 
                                        name="event-status" 
                                        defaultValue={isEditing ? eventData.status.toLowerCase() : 'planned'}
                                        required
                                    >
                                        <option value="planned">Planned</option>
                                        <option value="completed">Completed</option>
                                        <option value="canceled">Canceled</option>
                                    </select>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                                        <path d="M480-333 240-573l51-51 189 189 189-189 51 51-240 240Z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <button type="submit">{isEditing ? 'Save Changes' : 'Create'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}