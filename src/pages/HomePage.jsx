import { Link } from 'react-router';
import { useSettings } from '../context/SettingsContext.jsx';

export default function HomePage({ events = [] }) {
    const { t } = useSettings();
    const total = events.length;
    const planned = events.filter(e => e.status === 'Planned').length;
    const completed = events.filter(e => e.status === 'Completed').length;
    const canceled = events.filter(e => e.status === 'Canceled').length;

    return (
        <main className="main home-page">
            <section className="home-hero">
                <h2 className="home-hero__title">{t.heroTitle}</h2>
                <p className="home-hero__subtitle">{t.heroSubtitle}</p>
                <Link to="/events" className="home-hero__cta">{t.heroCta}</Link>
            </section>

            <section className="home-stats">
                <div className="stat-card">
                    <span className="stat-card__value">{total}</span>
                    <span className="stat-card__label">{t.statTotal}</span>
                </div>
                <div className="stat-card stat-card--planned">
                    <span className="stat-card__value">{planned}</span>
                    <span className="stat-card__label">{t.statPlanned}</span>
                </div>
                <div className="stat-card stat-card--completed">
                    <span className="stat-card__value">{completed}</span>
                    <span className="stat-card__label">{t.statCompleted}</span>
                </div>
                <div className="stat-card stat-card--canceled">
                    <span className="stat-card__value">{canceled}</span>
                    <span className="stat-card__label">{t.statCanceled}</span>
                </div>
            </section>
        </main>
    );
}
