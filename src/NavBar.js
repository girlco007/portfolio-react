import React from 'react';
import {Link} from 'react-router'
import './App.css';
import {Navbar, Nav, NavItem } from 'react-bootstrap'

export const NavBar = (props) => {
    return (
      <Navbar collapseOnSelect fixedTop className="nav-bar-initial-height">
          <Navbar.Header className="nav-bar-initial-paddig">
            <Navbar.Brand>
              <Link to={'/home'} className="logo">angie</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="nav-bar-initial-paddig">
              {/* <li><Link to={'/home'}>Projects</Link></li>
              <hr className="menu-line"/>
              <li><Link to={'/aboutme'}>Abot Me</Link></li>
              <hr className="menu-line"/>
              <li><Link to={'/resume'}>Résumé</Link></li>
              <hr className="menu-line"/>
              <li><Link to={'/contact'}>Contact</Link></li> */}


              <NavItem eventKey={1}
                // onClick={this.props.projects}
                >Projects</NavItem>
              <NavItem eventKey={2} href={'/home'}>About Me</NavItem>
              <NavItem eventKey={3} href="#">Résumé</NavItem>
              <NavItem eventKey={4} href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
//need to fix Link with NavItem
