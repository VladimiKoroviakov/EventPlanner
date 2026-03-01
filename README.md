# EventPlanner
Event Planner is a simple web app for creating and managing events. Add events with name, location, date, time, and status, then track them in a clean card-based interface. Includes search, filtering, and a light/dark mode toggle for a comfortable user experience.

## Features

Built with:
- View a list of events
- Search and filter events
- Modular React component architecture
- Fast development environment using Vite
- Custom styling with CSS
- Responsive UI layout


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
│   │   ├── EventDetail.jsx     # Detailed event information (date, time, location)
│   │   ├── EventList.jsx       # Displays all events
│   │   ├── EventListItem.jsx   # Individual event component
│   │   ├── EventModal.jsx      # Modal popup for creating/editing an event
│   │   ├── Footer.jsx          # Footer section
│   │   ├── Header.jsx          # Application header
│   │   ├── Main.jsx            # Main application layout
│   │   ├── SearchBar.jsx       # Event search functionality (with filters)
│   │   └── StatusBadge.jsx     # Visual indicator for event status
│   │
│   ├── App.css            # Application styles
│   ├── App.jsx            # Root React component
│   ├── index.css          # Global styles
│   └── main.jsx           # React entry point
│
├── index.html             # Main HTML template
├── package.json           # Project dependencies
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Built With

- React — Component-based UI library
- Vite — Fast development server and build tool
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