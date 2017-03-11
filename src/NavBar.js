import React from 'react';
import {Link} from 'react-router'
import {browserHistory} from 'react-router';

import './App.css';
import {Navbar, Nav, NavItem } from 'react-bootstrap'

export class NavBar extends React.Component {

  onWork(){
    browserHistory.push('/home')
  }

  onAbout(){
    browserHistory.push('/aboutme')
  }

  onContact(){
    browserHistory.push('/contact')
  }

  render(){
    return (
      <Navbar collapseOnSelect fixedTop className="nav-bar-initial-height">
          <Navbar.Header className="nav-bar-initial-paddig">
            <Navbar.Brand>
              <Link to={'/home'} className="logo">Angelika Gaszczyk</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="nav-bar-initial-paddig">
              <NavItem eventKey={1} onClick={this.onWork}>Work</NavItem>
              <NavItem eventKey={2} onClick={this.onAbout}>About</NavItem>
              {/* <NavItem eventKey={3} onClick={this.onResume}>Résumé</NavItem> */}
              <NavItem eventKey={4} onClick={this.onContact}>Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    );
  }
}
//need to fix Link with NavItem
