import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col } from 'react-bootstrap'

export const Footer = (props) => {
    return (
      <div className="footer">
        <Grid>
          <Row className="footer-padding">
            <Col xs={6} md={3}>
              <ul>
                <li><a href="#" className="fo">Linkedin</a></li>
                <li><a href="#" className="fo">Behance</a></li>
                <li><a href="#" className="fo">Dribbble</a></li>
              </ul>
            </Col>

            <Col xs={6} md={3}>
              <ul>
                <li><a href="#" className="fo">Twitter</a></li>
                <li><a href="#" className="fo">Twitter</a></li>
                <li><a href="#" className="fo">Twitter</a></li>
              </ul>
            </Col>

            <Col xs={12} md={6} className="footer-padding-text">
              <p>Website designed and developed by <span className="logo"> angie </span> with React
              {/* <img src={logo} alt="logo" className="App-logo" /> */}
            </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
