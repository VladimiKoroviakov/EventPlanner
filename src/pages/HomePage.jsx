import { Link } from 'react-router';

export default function HomePage({ events = [] }) {
    const total = events.length;
    const planned = events.filter(e => e.status === 'Planned').length;
    const completed = events.filter(e => e.status === 'Completed').length;
    const canceled = events.filter(e => e.status === 'Canceled').length;

    return (
        <main className="main home-page">
            <section className="home-hero">
                <h2 className="home-hero__title">Welcome to Event Planner</h2>
                <p className="home-hero__subtitle">
                    Organise, track, and manage all your events in one place.
                </p>
                <Link to="/events" className="home-hero__cta">View All Events</Link>
            </section>

            <section className="home-stats">
                <div className="stat-card">
                    <span className="stat-card__value">{total}</span>
                    <span className="stat-card__label">Total Events</span>
                </div>
                <div className="stat-card stat-card--planned">
                    <span className="stat-card__value">{planned}</span>
                    <span className="stat-card__label">Planned</span>
                </div>
                <div className="stat-card stat-card--completed">
                    <span className="stat-card__value">{completed}</span>
                    <span className="stat-card__label">Completed</span>
                </div>
                <div className="stat-card stat-card--canceled">
                    <span className="stat-card__value">{canceled}</span>
                    <span className="stat-card__label">Canceled</span>
                </div>
            </section>
        </main>
    );
}
