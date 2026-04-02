import { Link } from 'react-router';
import StatusBadge from './StatusBadge.jsx';
import EventDetail from './EventDetail.jsx';
import { useSettings } from '../context/SettingsContext.jsx';
import { Button } from './ui';

// EventListItem reads language directly from context.
// Theme now handled via CSS tokens — no need to read dark state.
export default function EventListItem({ event, onClose, openModal }) {
    const { t } = useSettings();

    return (
        <li className="event-list-item">
            <div className="title">
                <StatusBadge status={event.status} />
                <h3>{event.title}</h3>
                <Button
                    variant="secondary"
                    size="sm"
                    className="close-button"
                    onClick={() => onClose(event.id)}
                    aria-label="Remove from list"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.0625 10L0 8.9375L3.9375 5L0 1.0625L1.0625 0L5 3.9375L8.9375 0L10 1.0625L6.0625 5L10 8.9375L8.9375 10L5 6.0625L1.0625 10Z" fill="currentColor"/>
                    </svg>
                </Button>
            </div>
            <div className="list">
                <div className="date-time">
                    <EventDetail eventDetail={event.date} eventDetailType="date" />
                    <EventDetail eventDetail={event.time} eventDetailType="time" />
                </div>
                <div className="location">
                    <EventDetail eventDetail={event.location} eventDetailType="location" />
                </div>
            </div>
            <div className="event-list-item__actions">
                <Link to={`/event/${event.id}`} className="details-link">
                    {t.detailsLink}
                </Link>
                <Button
                    variant="secondary"
                    size="sm"
                    className="edit-button"
                    onClick={() => openModal(event)}
                    aria-label="Edit event"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                        <path d="M144-144v-153l498-498q11-11 24-16t27-5q14 0 27 5t24 16l51 51q11 11 16 24t5 27q0 14-5 27t-16 24L297-144H144Zm549-498 51-51-51-51-51 51 51 51Z"/>
                    </svg>
                </Button>
            </div>
        </li>
    );
}
