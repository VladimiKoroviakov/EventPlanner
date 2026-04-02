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

    // Persist choice and apply data-theme attribute to <html> on every change.
    // The [data-theme="dark"] selector in tokens.css overrides semantic CSS variables.
    useEffect(() => {
        localStorage.setItem('dark_mode', dark);
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
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
