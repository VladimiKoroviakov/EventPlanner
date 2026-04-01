import { useTheme } from '../context/ThemeContext.jsx';
import { useSettings } from '../context/SettingsContext.jsx';

// Footer consumes ThemeContext and SettingsContext directly — no props required.
export default function Footer() {
    const year = new Date().getFullYear();
    const { dark } = useTheme();
    const { t } = useSettings();

    return (
        <footer className={`footer${dark ? ' footer--dark' : ''}`}>
            <small>© {year} {t.footerBrand} — {t.footerRights}</small>
        </footer>
    );
}