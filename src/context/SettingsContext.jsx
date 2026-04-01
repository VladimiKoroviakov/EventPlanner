import { createContext, useState, useContext } from 'react';

// Supported UI translations (English / Ukrainian)
const translations = {
    en: {
        langLabel: 'EN',
        addEvent: 'Add Event',
        navHome: 'Home',
        navEvents: 'Events',
        navAbout: 'About',
        footerBrand: 'Event Planner',
        footerRights: 'All rights reserved.',
    },
    uk: {
        langLabel: 'UA',
        addEvent: 'Додати подію',
        navHome: 'Головна',
        navEvents: 'Події',
        navAbout: 'Про нас',
        footerBrand: 'Планувальник подій',
        footerRights: 'Усі права захищені.',
    },
};

// 1. Create the context object
const SettingsContext = createContext();

// 2. Provider component
export function SettingsProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem('language') || 'en';
    });

    const toggleLanguage = () => {
        setLanguage(prev => {
            const next = prev === 'en' ? 'uk' : 'en';
            localStorage.setItem('language', next);
            return next;
        });
    };

    // Shorthand translation accessor
    const t = translations[language];

    return (
        <SettingsContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </SettingsContext.Provider>
    );
}

// 3. Custom hook for consumers
export function useSettings() {
    const context = useContext(SettingsContext);
    if (!context) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
}
