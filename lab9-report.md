# Lab 9 — Global State & Context API: What Was Done

## Overview

The goal of Lab 9 was to refactor the Event Planner app to use **React Context API** for global state management instead of prop drilling. Additionally, all bonus tasks were completed.

---

## Mandatory Tasks

### 1. Created `src/context/ThemeContext.jsx`

**File created from scratch.**

Contains three exports:

- `ThemeContext` — the raw context object (internal, not exported directly).
- `ThemeProvider` — a wrapper component that owns the `dark` boolean state and `toggleTheme` function, persists the choice to `localStorage`, and applies/removes the `.dark` CSS class on `<html>` via a `useEffect`.
- `useTheme()` — a custom hook that reads from `ThemeContext` and throws a descriptive error if it is called outside a `ThemeProvider`.

```jsx
// Any component can now do:
const { dark, toggleTheme } = useTheme();
```

### 2. Connected `ThemeProvider` in `App.jsx`

`App.jsx` was updated to import `ThemeProvider` and `SettingsProvider` and wrap the entire JSX tree:

```jsx
<ThemeProvider>
  <SettingsProvider>
    <Routes>...</Routes>
    <EventModal ... />
  </SettingsProvider>
</ThemeProvider>
```

All `dark` state, `toggleTheme` function, and the `useEffect` that previously managed the `.dark` class were **removed from `App.jsx`** — that logic now lives in `ThemeContext.jsx`.

### 3. Theme toggle button in `Header`

`Header.jsx` was updated to call `useTheme()` directly. It no longer receives `dark` or `toggleTheme` as props.

```jsx
const { dark, toggleTheme } = useTheme();
```

The sun/moon SVG icon still switches based on `dark`, and clicking the button calls `toggleTheme` — behaviour is identical to before, but prop drilling is eliminated.

### 4. Theme applied to at least three components

The theme (via the `.dark` CSS class + CSS custom properties) already styled all components. In addition, the following components now **explicitly consume `useTheme()`**, making the Context API usage demonstrable:

| Component | What `useTheme` is used for |
|---|---|
| `Header.jsx` | Chooses the correct SVG icon (sun vs moon) |
| `Footer.jsx` | Adds `footer--dark` modifier class; uses branded text from `SettingsContext` |
| `EventListItem.jsx` | Adds `event-list-item--dark` modifier class on each card |

### 5. Theme affects background, text colour, and accent colours

The existing CSS variables in `index.css` (`:root` for light, `.dark` for dark) already handle all of this. The `.dark` class is toggled on `<html>` by `ThemeProvider`'s `useEffect`, so **every component** in the tree automatically picks up the correct palette.

---

## Bonus Tasks (all completed)

### Bonus 1 — Persist theme in `localStorage`

`ThemeProvider` reads the saved preference on mount:

```js
const [dark, setDark] = useState(() => {
  const saved = localStorage.getItem('dark_mode');
  if (saved !== null) return saved === 'true';
  // falls through to OS detection below
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
});
```

And writes it back on every change:

```js
useEffect(() => {
  localStorage.setItem('dark_mode', dark);
  ...
}, [dark]);
```

### Bonus 2 — Smooth CSS transition

Added to `html, body` in `index.css`:

```css
transition: background-color 0.3s ease, color 0.3s ease;
```

Buttons, cards, and the header already had `transition: all 0.3s ease` from previous labs, so the theme switch is fully animated throughout the app.

### Bonus 3 — Second context: `SettingsContext` (language switcher)

**File created: `src/context/SettingsContext.jsx`**

Contains three exports:
- `SettingsProvider` — owns `language` state (`'en'` or `'uk'`), persists to `localStorage`, and exposes `toggleLanguage()` and a shorthand `t` (translations object).
- `useSettings()` — custom hook for consumers.
- `translations` — an internal map of all UI strings for English and Ukrainian.

Used in:
- `Header.jsx` — nav link labels (`Home`/`Головна`, `Events`/`Події`, `About`/`Про нас`), the `Add Event` button text, and a new **language toggle button** (`EN` ↔ `UA`).
- `Footer.jsx` — brand name and rights line switch between English and Ukrainian.

### Bonus 4 — Auto-detect OS colour scheme (`prefers-color-scheme`)

`ThemeProvider` uses `window.matchMedia('(prefers-color-scheme: dark)').matches` as the fallback initial value when no `localStorage` preference has been saved yet. This means a first-time visitor automatically gets the theme that matches their OS setting.

---

## Prop Drilling — Before vs After

**Before:**
```
App (owns dark, toggleTheme)
  └─ Layout (dark, toggleTheme props)
       └─ Header (dark, toggleTheme props)
```

**After:**
```
ThemeProvider (owns dark, toggleTheme — in Context)
  └─ App
       └─ Layout           ← no theme props
            └─ Header      ← calls useTheme()
            └─ Footer      ← calls useTheme() + useSettings()
       └─ EventListItem    ← calls useTheme()
```

---

## Files Changed

| File | Change type |
|---|---|
| `src/context/ThemeContext.jsx` | **Created** |
| `src/context/SettingsContext.jsx` | **Created** |
| `src/App.jsx` | Removed dark state/effect, added providers |
| `src/components/Layout.jsx` | Removed dark/toggleTheme props |
| `src/components/Header.jsx` | Now uses useTheme + useSettings; language toggle button added |
| `src/components/Footer.jsx` | Now uses useTheme + useSettings |
| `src/components/EventListItem.jsx` | Now uses useTheme for modifier class |
| `src/index.css` | Added body transition for smooth theme change |
| `src/App.css` | Added `.lang-toggle-button` styles |

---

## Build Verification

The app was built with `vite build` and compiled successfully:

```
✓ 57 modules transformed.
✓ built in 922ms
```

No errors or warnings.
