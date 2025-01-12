import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <Router>
      <div className="wrapper">
        <Sidebar collapsed={sidebarCollapsed} />
        <div className="main">
          <Header onToggleSidebar={toggleSidebar} />
          <div className="page-content">
            <Dashboard />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;