
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';

function NavBar({ isAuthorized, login, onLogoutUser }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark" >
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/user-form">User form</Nav.Link>
          {isAuthorized
            ? <><Nav.Link as={Link} to="/admin-table">Admin table</Nav.Link>{login}</>
            : <Nav.Link as={Link} to="/login">Login</Nav.Link>
          }
          {isAuthorized && <Nav.Link as={Link} to="/logout">Logout</Nav.Link>}
        </Nav>
      </Navbar>
    </div>
  )
}

export default withRouter(NavBar);