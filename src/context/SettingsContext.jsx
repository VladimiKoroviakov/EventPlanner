import { createContext, useState, useContext } from 'react';

// Supported UI translations (English / Ukrainian)
const translations = {
    en: {
        // ── Header ──────────────────────────────────────────────────────────
        langLabel: 'EN',
        addEvent: 'Add Event',
        navHome: 'Home',
        navEvents: 'Events',
        navAbout: 'About',

        // ── Footer ───────────────────────────────────────────────────────────
        footerBrand: 'Event Planner',
        footerRights: 'All rights reserved.',

        // ── Home Page ────────────────────────────────────────────────────────
        heroTitle: 'Welcome to Event Planner',
        heroSubtitle: 'Organise, track, and manage all your events in one place.',
        heroCta: 'View All Events',
        statTotal: 'Total Events',
        statPlanned: 'Planned',
        statCompleted: 'Completed',
        statCanceled: 'Canceled',

        // ── About Page ───────────────────────────────────────────────────────
        aboutTitle: 'About Event Planner',
        aboutIntro: 'Event Planner is a single-page React application designed to help you organise personal and professional events with ease. You can create, edit, delete, search, and filter events — all without ever leaving the browser tab.',
        aboutFeaturesTitle: 'Key Features',
        aboutFeature1: 'Add, edit, and delete custom events with title, date, time, location, and status.',
        aboutFeature2: 'Search events by name or location in real time.',
        aboutFeature3: 'Filter events by status: All, Planned, Completed, Canceled, Upcoming, Past.',
        aboutFeature4: 'Browse 10 public events fetched live from the DummyJSON API.',
        aboutFeature5: 'Toggle between Light and Dark themes — preference is saved automatically.',
        aboutFeature6: 'All events persist in localStorage, so they survive page refreshes.',
        aboutFeature7: 'Fully responsive layout for mobile, tablet, and desktop screens.',
        aboutFeature8: 'Multi-page navigation powered by React Router.',
        aboutTechTitle: 'Tech Stack',
        aboutTech1: 'React 19 — component-based UI',
        aboutTech2: 'React Router 7 — client-side routing',
        aboutTech3: 'Vite — fast development server & build tool',
        aboutTech4: 'CSS custom properties — theming & design tokens',
        aboutTech5: 'DummyJSON API — sample event data',
        aboutCta: 'Go to Events',

        // ── Event Detail Page ────────────────────────────────────────────────
        loadingDetails: 'Loading event details…',
        eventNotFound: 'Event Not Found',
        eventNotFoundMsg: 'Sorry, the event with ID',
        eventNotFoundMsg2: 'does not exist in your list.',
        returnToEvents: '← Return to Events',
        backBtn: '← Back',
        allEventsLink: 'All Events',
        eventIdLabel: 'ID:',

        // ── Events Page ──────────────────────────────────────────────────────
        myEvents: 'My Events',
        apiEventsTab: 'API Events',

        // ── Event Modal ──────────────────────────────────────────────────────
        editEvent: 'Edit Event',
        newEvent: 'New Event',

        // ── Event Form ───────────────────────────────────────────────────────
        formNameLabel: 'Name',
        formNamePlaceholder: 'Event Name...',
        formLocationLabel: 'Location',
        formLocationPlaceholder: 'Event Location...',
        formDateTimeLabel: 'Date & Time',
        formStatusLabel: 'Status',
        formStatusPlanned: 'Planned',
        formStatusCompleted: 'Completed',
        formStatusCanceled: 'Canceled',
        formErrorName: 'Event name cannot be empty',
        formErrorLocation: 'Location cannot be empty',
        formSaveChanges: 'Save Changes',
        formCreate: 'Create',

        // ── Status Badge ─────────────────────────────────────────────────────
        statusPlanned: 'Planned',
        statusCompleted: 'Completed',
        statusCanceled: 'Canceled',

        // ── Search Bar ───────────────────────────────────────────────────────
        searchPlaceholder: 'Search events...',
        filterAll: 'All',
        filterUpcoming: 'Upcoming',
        filterPast: 'Past',
        filterPlanned: 'Planned',
        filterCompleted: 'Completed',
        filterCanceled: 'Cancelled',

        // ── API / Event List ─────────────────────────────────────────────────
        apiEventsTitle: 'API Events',
        apiEventsSource: '(via DummyJSON)',
        apiLoading: 'Loading API Events...',
        apiError: 'Error loading events:',
        noEventsFound: 'No events found',

        // ── Event List Item ──────────────────────────────────────────────────
        detailsLink: 'Details',

        // ── 404 Page ─────────────────────────────────────────────────────────
        notFoundCode: '404',
        notFoundTitle: 'Page Not Found',
        notFoundText: 'The page you are looking for does not exist or has been moved.',
        notFoundLink: '← Back to Home',
    },

    uk: {
        // ── Header ──────────────────────────────────────────────────────────
        langLabel: 'UA',
        addEvent: 'Додати подію',
        navHome: 'Головна',
        navEvents: 'Події',
        navAbout: 'Про нас',

        // ── Footer ───────────────────────────────────────────────────────────
        footerBrand: 'Планувальник подій',
        footerRights: 'Усі права захищені.',

        // ── Home Page ────────────────────────────────────────────────────────
        heroTitle: 'Ласкаво просимо до Планувальника подій',
        heroSubtitle: 'Організовуйте, відстежуйте та керуйте всіма своїми подіями в одному місці.',
        heroCta: 'Переглянути всі події',
        statTotal: 'Всього подій',
        statPlanned: 'Заплановано',
        statCompleted: 'Завершено',
        statCanceled: 'Скасовано',

        // ── About Page ───────────────────────────────────────────────────────
        aboutTitle: 'Про Планувальник подій',
        aboutIntro: 'Планувальник подій — це односторінковий React-застосунок, розроблений для зручного організовування особистих і робочих подій. Ви можете створювати, редагувати, видаляти, шукати та фільтрувати події — не покидаючи вкладку браузера.',
        aboutFeaturesTitle: 'Ключові функції',
        aboutFeature1: 'Додавайте, редагуйте та видаляйте події з назвою, датою, часом, місцем і статусом.',
        aboutFeature2: 'Шукайте події за назвою або місцем у реальному часі.',
        aboutFeature3: 'Фільтруйте події за статусом: Всі, Заплановані, Завершені, Скасовані, Майбутні, Минулі.',
        aboutFeature4: 'Перегляньте 10 публічних подій, отриманих з DummyJSON API.',
        aboutFeature5: 'Перемикайте світлу та темну тему — вибір зберігається автоматично.',
        aboutFeature6: 'Усі події зберігаються в localStorage і не зникають після оновлення сторінки.',
        aboutFeature7: 'Повністю адаптивний макет для мобільних пристроїв, планшетів і десктопів.',
        aboutFeature8: 'Багатосторінкова навігація на основі React Router.',
        aboutTechTitle: 'Технологічний стек',
        aboutTech1: 'React 19 — компонентний UI',
        aboutTech2: 'React Router 7 — клієнтська маршрутизація',
        aboutTech3: 'Vite — швидкий dev-сервер і збірка',
        aboutTech4: 'CSS custom properties — теми та дизайн-токени',
        aboutTech5: 'DummyJSON API — приклад даних подій',
        aboutCta: 'До подій',

        // ── Event Detail Page ────────────────────────────────────────────────
        loadingDetails: 'Завантаження деталей події…',
        eventNotFound: 'Подію не знайдено',
        eventNotFoundMsg: 'На жаль, подія з ID',
        eventNotFoundMsg2: 'не існує у вашому списку.',
        returnToEvents: '← Повернутись до подій',
        backBtn: '← Назад',
        allEventsLink: 'Всі події',
        eventIdLabel: 'ID:',

        // ── Events Page ──────────────────────────────────────────────────────
        myEvents: 'Мої події',
        apiEventsTab: 'API події',

        // ── Event Modal ──────────────────────────────────────────────────────
        editEvent: 'Редагувати подію',
        newEvent: 'Нова подія',

        // ── Event Form ───────────────────────────────────────────────────────
        formNameLabel: 'Назва',
        formNamePlaceholder: 'Назва події...',
        formLocationLabel: 'Місце',
        formLocationPlaceholder: 'Місце проведення...',
        formDateTimeLabel: 'Дата і час',
        formStatusLabel: 'Статус',
        formStatusPlanned: 'Заплановано',
        formStatusCompleted: 'Завершено',
        formStatusCanceled: 'Скасовано',
        formErrorName: 'Назва події не може бути порожньою',
        formErrorLocation: 'Місце проведення не може бути порожнім',
        formSaveChanges: 'Зберегти зміни',
        formCreate: 'Створити',

        // ── Status Badge ─────────────────────────────────────────────────────
        statusPlanned: 'Заплановано',
        statusCompleted: 'Завершено',
        statusCanceled: 'Скасовано',

        // ── Search Bar ───────────────────────────────────────────────────────
        searchPlaceholder: 'Пошук подій...',
        filterAll: 'Всі',
        filterUpcoming: 'Майбутні',
        filterPast: 'Минулі',
        filterPlanned: 'Заплановані',
        filterCompleted: 'Завершені',
        filterCanceled: 'Скасовані',

        // ── API / Event List ─────────────────────────────────────────────────
        apiEventsTitle: 'API події',
        apiEventsSource: '(через DummyJSON)',
        apiLoading: 'Завантаження API подій...',
        apiError: 'Помилка завантаження:',
        noEventsFound: 'Подій не знайдено',

        // ── Event List Item ──────────────────────────────────────────────────
        detailsLink: 'Детальніше',

        // ── 404 Page ─────────────────────────────────────────────────────────
        notFoundCode: '404',
        notFoundTitle: 'Сторінку не знайдено',
        notFoundText: 'Сторінка, яку ви шукаєте, не існує або була переміщена.',
        notFoundLink: '← На головну',
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
