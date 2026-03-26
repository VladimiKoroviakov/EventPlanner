import { Link } from 'react-router';

export default function NotFoundPage() {
    return (
        <main className="main not-found-page">
            <section className="panel not-found-panel">
                <span className="not-found-panel__code">404</span>
                <h2 className="not-found-panel__title">Page Not Found</h2>
                <p className="not-found-panel__text">
                    The page you are looking for does not exist or has been moved.
                </p>
                <Link to="/" className="not-found-panel__link">← Back to Home</Link>
            </section>
        </main>
    );
}
