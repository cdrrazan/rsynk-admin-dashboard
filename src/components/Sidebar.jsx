import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaChartBar,
  FaUsers,
  FaShoppingCart,
  FaCog,
  FaTable,
  FaWpforms
} from 'react-icons/fa';

function Sidebar({ collapsed }) {
  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h3 className="sidebar-brand">rSYNK</h3>
      </div>

      <Nav className="flex-column">
        <Nav.Item>
          <Link to="/" className="nav-link active">
            <FaHome className="sidebar-icon" />
            <span>Dashboard</span>
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/analytics" className="nav-link">
            <FaChartBar className="sidebar-icon" />
            <span>Analytics</span>
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/users" className="nav-link">
            <FaUsers className="sidebar-icon" />
            <span>Users</span>
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/ecommerce" className="nav-link">
            <FaShoppingCart className="sidebar-icon" />
            <span>eCommerce</span>
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/tables" className="nav-link">
            <FaTable className="sidebar-icon" />
            <span>Tables</span>
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/forms" className="nav-link">
            <FaWpforms className="sidebar-icon" />
            <span>Forms</span>
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/settings" className="nav-link">
            <FaCog className="sidebar-icon" />
            <span>Settings</span>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;
