import { createContext, useState, useContext, useEffect } from 'react';

// 1. Create the context object
const ThemeContext = createContext();

// 2. Provider component — owns the state and exposes it to the entire tree
export function ThemeProvider({ children }) {
    const [dark, setDark] = useState(() => {
        // Read persisted preference from localStorage first
        const saved = localStorage.getItem('dark_mode');
        if (saved !== null) return saved === 'true';
        // Bonus: auto-detect OS color-scheme preference if no saved value
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const toggleTheme = () => setDark(prev => !prev);

    // Persist choice and apply the `.dark` class to <html> on every change
    useEffect(() => {
        localStorage.setItem('dark_mode', dark);
        const root = document.documentElement;
        if (dark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [dark]);

    return (
        <ThemeContext.Provider value={{ dark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 3. Custom hook — consumers call useTheme() instead of useContext(ThemeContext)
export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
