import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import NavBar from './NavBar'
import PortfolioBody from './PortfolioBody'
// import Footer from './Footer'
import {Grid, Row, Col} from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
      <div className='body'>
        <Grid>
          <Row className="show-grid header">
            <Col xs={12}>
              <div className="vertical-align">
               <h1 className="main-text">Angelika Gaszczyk, a designer.</h1>
               <hr />
               <p>A designer, with passion for creating user friendly interfaces for both mobile devices and web applications.<br />
                   I can also develop static websites with responsive design. </p>
               </div>
            </Col>
          </Row>
        </Grid>
        <PortfolioBody />
      </div>
    );
  }
}

export default Home;
