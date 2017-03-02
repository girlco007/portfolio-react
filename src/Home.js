import React from 'react';
// import {browserHistory} from 'react-router';
import './App.css';
// import PortfolioBody from './PortfolioBody'
import {Grid, Row, Col} from 'react-bootstrap'


export class Home extends React.Component {
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
      </div>
    );
  }
}
