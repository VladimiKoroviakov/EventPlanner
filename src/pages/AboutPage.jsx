import { Link } from 'react-router';

export default function AboutPage() {
    return (
        <main className="main about-page">
            <section className="panel about-panel">
                <h2 className="about-panel__title">About Event Planner</h2>

                <p className="about-panel__text">
                    <strong>Event Planner</strong> is a single-page React application designed to
                    help you organise personal and professional events with ease. You can create,
                    edit, delete, search, and filter events — all without ever leaving the browser tab.
                </p>

                <h3 className="about-panel__subtitle">Key Features</h3>
                <ul className="about-panel__list">
                    <li>Add, edit, and delete custom events with title, date, time, location, and status.</li>
                    <li>Search events by name or location in real time.</li>
                    <li>Filter events by status: All, Planned, Completed, Canceled, Upcoming, Past.</li>
                    <li>Browse 10 public events fetched live from the DummyJSON API.</li>
                    <li>Toggle between Light and Dark themes — preference is saved automatically.</li>
                    <li>All events persist in <code>localStorage</code>, so they survive page refreshes.</li>
                    <li>Fully responsive layout for mobile, tablet, and desktop screens.</li>
                    <li>Multi-page navigation powered by React Router.</li>
                </ul>

                <h3 className="about-panel__subtitle">Tech Stack</h3>
                <ul className="about-panel__list">
                    <li>React 19 — component-based UI</li>
                    <li>React Router 7 — client-side routing</li>
                    <li>Vite — fast development server &amp; build tool</li>
                    <li>CSS custom properties — theming &amp; design tokens</li>
                    <li>DummyJSON API — sample event data</li>
                </ul>

                <Link to="/events" className="about-panel__cta">Go to Events</Link>
            </section>
        </main>
    );
}
