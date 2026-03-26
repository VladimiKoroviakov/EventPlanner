import { Outlet } from 'react-router';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default function Layout({ openModal, dark, toggleTheme }) {
    return (
        <div className="app">
            <Header openModal={openModal} dark={dark} toggleTheme={toggleTheme} />
            <Outlet />
            <Footer />
        </div>
    );
}
