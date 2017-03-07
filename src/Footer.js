import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col, Image } from 'react-bootstrap';
// import {browserHistory} from 'react-router';
import upArrow from './img/upArrow.svg';

export class Footer extends React.Component {

  toTop(){
  }

  render(){
    return (
      <div className="footer">
        <Grid>
          <Row className="footer-padding">
            <Col xs={6} md={3}>
              <ul>
                <li><a href="#" className="fo title">SOCIAL NETWORKS</a></li>
              </ul>
              <ul>
                <li><a href="https://www.linkedin.com/in/angelika-gaszczyk-5885a7121" className="fo" target="_blank">Linkedin</a></li>
                <li><a href="https://www.behance.net/angi007" className="fo" target="_blank">Behance</a></li>
                <li><a href="#" className="fo" target="_blank">Twitter</a></li>
              </ul>
            </Col>


            <Col xs={12} md={6} mdOffset={2} className="footer-padding-text">
              <p className="fo">Website designed and developed by <span className="logo"> angie </span> with React
              <img src={logo} alt="logo" className="App-logo" />
            </p>
            </Col>
            {/* <Col xs={12} md={1} mdOffset={11} >
              <Image src={upArrow} alt="up arrow" className="upArrow" onClick={this.toTop}/>
            </Col> */}
          </Row>
        </Grid>
      </div>
    );
  }
}
