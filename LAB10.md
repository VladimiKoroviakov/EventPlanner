# Лабораторна робота №10 — Стилізація та дизайн-система

## Мета

Реалізація дизайн-системи для React-застосунку Event Planner на основі CSS Modules та CSS Custom Properties (дизайн-токенів) з підтримкою світлої та темної теми.

---

## Виконані завдання

### 1. Файл дизайн-токенів `src/styles/tokens.css`

Створено файл `src/styles/tokens.css`, що містить CSS-змінні для обох тем.

Токени охоплюють:
- **Кольори** — основні (`--color-primary`, `--color-secondary`, `--color-danger`), семантичні поверхні (`--color-bg`, `--color-surface`, `--color-text`, `--color-border`) та стани (`--color-success`, `--color-error`, `--color-pending`).
- **Типографіку** — `--font-family`, шкала розмірів (`--font-size-xs` … `--font-size-xl`), товщини (`--font-weight-normal/medium/bold`).
- **Відступи** — `--space-1` … `--space-10` (кратно 4 px).
- **Радіуси** — `--radius-sm/md/lg/full`.
- **Тіні** — `--shadow-sm`, `--shadow-md`.
- **Перехід** — `--transition: 0.25s ease`.

Темна тема визначена через `[data-theme="dark"]`, що перевизначає семантичні змінні.

Файл підключено в `src/main.jsx` **до** `index.css`:

```jsx
import './styles/tokens.css'
import './index.css'
```

---

### 2. Оновлення `ThemeProvider` — атрибут `data-theme`

Файл: `src/context/ThemeContext.jsx`

Замінено маніпуляцію CSS-класом `.dark` на встановлення атрибута `data-theme` безпосередньо на `document.documentElement`:

```js
// Було:
root.classList.add('dark') / root.classList.remove('dark')

// Стало:
document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
```

Відповідно в `src/index.css` селектор `.dark { … }` замінено на `[data-theme="dark"] { … }`.

Тепер перемикання теми в DevTools → Elements → `<html>` відображає `data-theme="dark"` / `data-theme="light"`, а у вкладці Styles → `:root` видно актуальні значення CSS-змінних.

---

### 3. Компонент `Button` з CSS Modules

Файли: `src/components/ui/Button/Button.jsx`, `src/components/ui/Button/Button.module.css`

Підтримувані пропси: `variant`, `size`, `disabled`, `onClick`, `...rest`.

Варіанти (`variant`):
- `primary` — жовтий фон (`--color-primary`), темний текст.
- `secondary` — прозорий фон, рамка (`--color-border`), поточний колір тексту.
- `danger` — червоний фон (`--color-danger`), білий текст.

Розміри (`size`): `sm`, `md` (за замовчуванням), `lg`.

Стан `disabled` застосовує `opacity: 0.45` та `cursor: not-allowed`.

---

### 4. Компонент `Card` з CSS Modules

Файли: `src/components/ui/Card/Card.jsx`, `src/components/ui/Card/Card.module.css`

Компонент складається з трьох підкомпонентів-зон:
- `Card.Header` — шапка з `border-bottom` та опційним `title`.
- `Card.Body` — основний контент.
- `Card.Footer` — підвал із `border-top`, flex-layout для кнопок дій.

Пропс `hoverable` додає підняту тінь (`--shadow-md`) при наведенні.

Всі кольори та тіні прив'язані до CSS-змінних із токенів — тема змінюється автоматично.

---

### 5. Компонент `Input` з CSS Modules

Файли: `src/components/ui/Input/Input.jsx`, `src/components/ui/Input/Input.module.css`

Пропси: `label`, `placeholder`, `disabled`, `icon`, `id`, `...rest`.

Особливості:
- Лейбл відображається над полем введення.
- Стан фокусу: `border-color: var(--color-secondary)` + синя тінь `box-shadow: 0 0 0 3px rgba(94,137,232,0.25)` — візуально чіткий та доступний.
- Стан `disabled`: прозорість 0.5, `cursor: not-allowed`.
- Опційна іконка зліва всередині обгортки.

---

### 6. Єдина точка експорту `src/components/ui/index.js`

```js
export { default as Button } from './Button/Button';
export { default as Card }   from './Card/Card';
export { default as Input }  from './Input/Input';
```

Доменні компоненти тепер імпортують UI так:

```js
import { Button, Card, Input } from './ui';
// або
import { Button, Input } from '../ui';
```

---

### 7. Застосування UI-компонентів у доменних компонентах

#### `EventListItem.jsx`

Замінено:
- `<button className="close-button">` → `<Button variant="secondary" size="sm" className="close-button">`.
- `<button className="edit-button">` → `<Button variant="secondary" size="sm" className="edit-button">`.

Також видалено зайвий імпорт `useTheme` — темізація тепер повністю керується CSS-змінними.

#### `EventForm.jsx`

Замінено:
- Поле введення назви події (`<div className="event-input event-name"><input …>`) → `<Input label={…} placeholder={…} icon={…} … />`.
- Поле введення місця події (`<div className="event-input event-location"><input …>`) → `<Input label={…} placeholder={…} icon={…} … />`.
- `<button type="submit">` → `<Button type="submit" variant="primary">`.

---

## Структура нових файлів

```
src/
├── styles/
│   └── tokens.css                        ← дизайн-токени (завдання 1)
├── context/
│   └── ThemeContext.jsx                  ← оновлено: data-theme (завдання 2)
├── index.css                             ← оновлено: [data-theme="dark"] (завдання 2)
├── main.jsx                              ← оновлено: імпорт tokens.css (завдання 1)
└── components/
    ├── ui/
    │   ├── index.js                      ← єдина точка експорту (завдання 6)
    │   ├── Button/
    │   │   ├── Button.jsx                ← завдання 3
    │   │   └── Button.module.css
    │   ├── Card/
    │   │   ├── Card.jsx                  ← завдання 4
    │   │   └── Card.module.css
    │   └── Input/
    │       ├── Input.jsx                 ← завдання 5
    │       └── Input.module.css
    ├── EventListItem.jsx                 ← оновлено: Button (завдання 7)
    └── EventForm.jsx                     ← оновлено: Input + Button (завдання 7)
```
