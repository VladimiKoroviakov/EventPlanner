import { Link } from 'react-router';
import { useSettings } from '../context/SettingsContext.jsx';

export default function NotFoundPage() {
    const { t } = useSettings();

    return (
        <main className="main not-found-page">
            <section className="panel not-found-panel">
                <span className="not-found-panel__code">{t.notFoundCode}</span>
                <h2 className="not-found-panel__title">{t.notFoundTitle}</h2>
                <p className="not-found-panel__text">{t.notFoundText}</p>
                <Link to="/" className="not-found-panel__link">{t.notFoundLink}</Link>
            </section>
        </main>
    );
}
