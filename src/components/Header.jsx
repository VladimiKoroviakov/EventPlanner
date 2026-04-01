import { NavLink } from 'react-router';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext.jsx';
import { useSettings } from '../context/SettingsContext.jsx';

// Header reads theme and language directly from context — no props needed.
export default function Header({ openModal }) {
    const [navOpen, setNavOpen] = useState(false);
    const { dark, toggleTheme } = useTheme();
    const { t, toggleLanguage } = useSettings();

    const closeNav = () => setNavOpen(false);

    return (
        <header className="header">
            <NavLink to="/" className="header__logo" end onClick={closeNav}>
                Event Planner
            </NavLink>

            {/* Desktop + mobile-open nav — labels come from SettingsContext */}
            <nav className={`header__nav${navOpen ? ' header__nav--open' : ''}`}>
                <NavLink to="/" end onClick={closeNav}>{t.navHome}</NavLink>
                <NavLink to="/events" onClick={closeNav}>{t.navEvents}</NavLink>
                <NavLink to="/about" onClick={closeNav}>{t.navAbout}</NavLink>
            </nav>

            <div className="buttons">
                <button className="add-event-button" data-mobile="Add" onClick={() => openModal()}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M444-444H240v-72h204v-204h72v204h204v72H516v204h-72v-204Z"/></svg>
                    {t.addEvent}
                </button>

                {/* Hamburger — visible only on mobile */}
                <button
                    className={`hamburger-btn${navOpen ? ' hamburger-btn--open' : ''}`}
                    onClick={() => setNavOpen(prev => !prev)}
                    aria-label="Toggle navigation"
                    aria-expanded={navOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Language toggle — SettingsContext bonus */}
                <button className="lang-toggle-button" onClick={toggleLanguage} aria-label="Toggle language">
                    {t.langLabel}
                </button>

                {/* Theme toggle — ThemeContext */}
                <button className="theme-mode-button" onClick={toggleTheme}>
                    {dark ? (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M338.5-338.5Q280-397 280-480t58.5-141.5Q397-680 480-680t141.5 58.5Q680-563 680-480t-58.5 141.5Q563-280 480-280t-141.5-58.5ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z"/></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z"/></svg>
                    )}
                </button>
            </div>
        </header>
    );
}
