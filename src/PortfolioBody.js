import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col } from 'react-bootstrap'

class PortfolioBody extends Component {
  render() {
    return (
      <div className="App-header">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <div className="box"><a href="#" className="box" >gumvelope</a></div>
            </Col>

            <Col xs={12} md={6}>
              <div className="box"><a href="#" className="box" >Collage mama</a></div>
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <div className="box"><a href="#" className="box" >MODA+</a></div>
            </Col>
          </Row>

            <Row className="show-grid">
            <Col xs={12} md={6}>
              <div className="box"><a href="#" /></div>
            </Col>

            <Col xs={12} md={6}>
              <div className="box"><a href="#" /></div>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default PortfolioBody;
