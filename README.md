# EventPlanner

Event Planner is a multi-page React application for creating and managing events. Add events with name, location, date, time, and status, then track them in a clean card-based interface. Includes search, filtering, API-sourced events, event detail pages, and a light/dark mode toggle — all with data persisted in `localStorage`.

## Features

- Multi-page navigation powered by React Router (Home, Events, Event Detail, About, 404)
- Dashboard home page with live event statistics (total, planned, completed, canceled)
- Add, edit, and delete events via a modal form with inline validation
- Search events by name or location in real time
- Filter events by status: All, Planned, Completed, Canceled, Upcoming, Past
- Switch between local (user-created) and API events (fetched from DummyJSON)
- Event detail page accessible via `/event/:id`
- Light/Dark theme toggle — preference saved to `localStorage`
- Events persist across page refreshes via `localStorage`
- Responsive layout with hamburger navigation for mobile screens
- Modular React component architecture
- Fast development environment using Vite


## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have Node.js v16+ and npm installed.

You can verify with:
```
node -v
npm -v
```

### Clone & Install

```
git clone https://github.com/VladimiKoroviakov/event-planner.git
cd event-planner
npm install
```

## Running the Development Server

Start the development server:
```
npm run dev
```

The application will run at:
```
http://localhost:5173
```

## Project Structure

```
event-planner/
│
├── public/                # Static public files
├── src/
│   ├── assets/            # Images, icons, and static assets
│   ├── components/        # Reusable React UI components
│   │   ├── ApiEventList.jsx    # Fetches and displays events from DummyJSON API
│   │   ├── EventDetail.jsx     # Detailed event information (date, time, location)
│   │   ├── EventForm.jsx       # Controlled form for creating/editing an event
│   │   ├── EventList.jsx       # Displays all local events
│   │   ├── EventListItem.jsx   # Individual event card component
│   │   ├── EventModal.jsx      # Modal wrapper that renders EventForm
│   │   ├── Footer.jsx          # Footer section
│   │   ├── Header.jsx          # App header with nav links, hamburger menu, theme toggle
│   │   ├── Layout.jsx          # Shared page layout (Header + Outlet + Footer)
│   │   ├── Main.jsx            # Main content area wrapper
│   │   ├── SearchBar.jsx       # Search input with status filter controls
│   │   └── StatusBadge.jsx     # Visual indicator for event status
│   │
│   ├── pages/             # Route-level page components
│   │   ├── AboutPage.jsx       # App info and tech stack
│   │   ├── EventDetailPage.jsx # Full detail view for a single event (/event/:id)
│   │   ├── EventsPage.jsx      # Events list with source switcher (local vs API)
│   │   ├── HomePage.jsx        # Landing page with event statistics
│   │   └── NotFoundPage.jsx    # 404 fallback page
│   │
│   ├── App.css            # Application styles
│   ├── App.jsx            # Root component — routes, state, modal logic
│   ├── index.css          # Global styles
│   └── main.jsx           # React entry point
│
├── index.html             # Main HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Built With

- React 19 — Component-based UI library
- React Router 7 — Client-side routing
- Vite — Fast development server and build tool
- DummyJSON API — Sample event data source
- Node.js — Runtime environment
- npm — Dependency management

## Contributing

Contributions are welcome! Follow these steps:
1.	Fork it
2.	Create your feature branch
```
git checkout -b feature/your-feature
```
3.	Commit your changes
4.	Push to your branch
5.	Open a Pull Request

Please make sure your code follows existing style conventions and includes relevant tests when applicable.


## Contact

If you want to reach out:
- GitHub: https://github.com/VladimiKoroviakov
- Email: v.korovyakov@student.sumdu.edu.ua


## License

This project is licensed under the MIT License - see the LICENSE file for details.


## Support

If you found this project useful, give it a ⭐ on GitHub!
