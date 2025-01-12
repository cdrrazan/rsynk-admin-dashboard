import React from 'react';
import { Navbar, Nav, Form, InputGroup, Button, Dropdown } from 'react-bootstrap';
import { FaBars, FaSearch, FaBell, FaUser } from 'react-icons/fa';

function Header({ onToggleSidebar }) {
  return (
    <Navbar bg="white" className="header-navbar">
      <div className="d-flex justify-content-between w-100 px-3">
        <div className="d-flex align-items-center">
          <Button variant="link" onClick={onToggleSidebar} className="sidebar-toggle">
            <FaBars />
          </Button>
          <Form className="d-none d-md-flex ms-3">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <Button variant="outline-secondary">
                <FaSearch />
              </Button>
            </InputGroup>
          </Form>
        </div>

        <Nav className="align-items-center">
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" className="nav-icon">
              <FaBell />
              <span className="badge bg-danger badge-pill">3</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Notification 1</Dropdown.Item>
              <Dropdown.Item>Notification 2</Dropdown.Item>
              <Dropdown.Item>Notification 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown align="end">
            <Dropdown.Toggle variant="link" className="nav-profile">
              <FaUser className="me-2" />
              <span className="d-none d-md-inline">Admin User</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </div>
    </Navbar>
  );
}

export default Header;