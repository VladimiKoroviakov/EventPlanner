import { Outlet } from 'react-router';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

// dark and toggleTheme no longer come in as props —
// Header now reads them directly from ThemeContext via useTheme().
export default function Layout({ openModal }) {
    return (
        <div className="app">
            <Header openModal={openModal} />
            <Outlet />
            <Footer />
        </div>
    );
}
