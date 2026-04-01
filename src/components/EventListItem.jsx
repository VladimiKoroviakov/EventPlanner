import { Link } from 'react-router';
import StatusBadge from './StatusBadge.jsx';
import EventDetail from './EventDetail.jsx';
import { useTheme } from '../context/ThemeContext.jsx';

// EventListItem reads the current theme via context — no props needed.
export default function EventListItem({ event, onClose, openModal }) {
    const { dark } = useTheme();

    return (
        <li className={`event-list-item${dark ? ' event-list-item--dark' : ''}`}>
            <div className="title">
                <StatusBadge status={event.status} />
                <h3>{event.title}</h3>
                <button className="close-button" onClick={() => onClose(event.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.0625 10L0 8.9375L3.9375 5L0 1.0625L1.0625 0L5 3.9375L8.9375 0L10 1.0625L6.0625 5L10 8.9375L8.9375 10L5 6.0625L1.0625 10Z" fill="#4D4D4D"/>
                    </svg>
                </button>
            </div>
            <div className="list">
                <div className="date-time">
                    <EventDetail label="Date"
                        eventDetail={event.date}
                        eventDetailType="date"
                    />
                    <EventDetail label="Time"
                        eventDetail={event.time}
                        eventDetailType="time"
                    />
                </div>
                <div className="location">
                    <EventDetail label="Location"
                        eventDetail={event.location}
                        eventDetailType="location"
                    />
                </div>
            </div>
            <div className="event-list-item__actions">
                <Link to={`/event/${event.id}`} className="details-link">
                    Details
                </Link>
                <button className="edit-button" onClick={() => openModal(event)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                        <path d="M144-144v-153l498-498q11-11 24-16t27-5q14 0 27 5t24 16l51 51q11 11 16 24t5 27q0 14-5 27t-16 24L297-144H144Zm549-498 51-51-51-51-51 51 51 51Z"/>
                    </svg>
                </button>
            </div>
        </li>
    );
}
