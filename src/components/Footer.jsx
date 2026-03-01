export default function Footer() {
    const year = new Date().getFullYear();
    
    return (
        <footer className="footer">
        <small>© {year} Event Planner</small>
        </footer>
    );
}