import { Link } from 'react-router';
import { useSettings } from '../context/SettingsContext.jsx';

export default function AboutPage() {
    const { t } = useSettings();

    return (
        <main className="main about-page">
            <section className="panel about-panel">
                <h2 className="about-panel__title">{t.aboutTitle}</h2>

                <p className="about-panel__text">{t.aboutIntro}</p>

                <div className="about-panel__columns">
                    <div className="about-panel__col">
                        <h3 className="about-panel__subtitle">{t.aboutFeaturesTitle}</h3>
                        <ul className="about-panel__list">
                            <li>{t.aboutFeature1}</li>
                            <li>{t.aboutFeature2}</li>
                            <li>{t.aboutFeature3}</li>
                            <li>{t.aboutFeature4}</li>
                            <li>{t.aboutFeature5}</li>
                            <li>{t.aboutFeature6}</li>
                            <li>{t.aboutFeature7}</li>
                            <li>{t.aboutFeature8}</li>
                        </ul>
                    </div>

                    <div className="about-panel__col">
                        <h3 className="about-panel__subtitle">{t.aboutTechTitle}</h3>
                        <ul className="about-panel__list">
                            <li>{t.aboutTech1}</li>
                            <li>{t.aboutTech2}</li>
                            <li>{t.aboutTech3}</li>
                            <li>{t.aboutTech4}</li>
                            <li>{t.aboutTech5}</li>
                        </ul>
                    </div>
                </div>

                <Link to="/events" className="about-panel__cta">{t.aboutCta}</Link>
            </section>
        </main>
    );
}
