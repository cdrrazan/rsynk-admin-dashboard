#  Admin Dashboard

A modern, responsive admin dashboard built with React and Bootstrap, featuring a collapsible sidebar, interactive charts, and a clean user interface.

## Features

- 📊 Interactive dashboard with Chart.js integration
- 🎯 Responsive design that works on all devices
- 📱 Collapsible sidebar for better space management
- 🎨 Clean and modern UI with Bootstrap components
- 📈 Real-time statistics cards
- 🔔 Notification system
- 👤 User profile management
- 🔍 Search functionality

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (version 14.0 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd rsynk-admin
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Build

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
rsynk-admin/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Header.jsx
│   │   └── Sidebar.jsx
│   ├── styles/
│   │   └── main.css
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
└── package.json
```

## Technologies Used

- React 18
- Bootstrap 5
- React Router DOM
- React Icons
- Chart.js with react-chartjs-2
- Vite (Build tool)

## Components

- **Dashboard**: Main dashboard view with statistics and charts
- **Header**: Top navigation bar with search and user controls
- **Sidebar**: Collapsible navigation sidebar with menu items

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Icons provided by React Icons and Font Awesome
- Charts powered by Chart.js
