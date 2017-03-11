import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col } from 'react-bootstrap';
// import {browserHistory} from 'react-router';
// import upArrow from './img/upArrow.svg';

export class Footer extends React.Component {

  // toTop(){
  // }

  render(){
    return (
      <div className="footer">
        <Grid >
          <Row className="footer-padding">
            <Col xs={4} md={3}>
              <ul>
                <li><a href="#" className="fo title">SOCIAL NETWORKS</a></li>
              </ul>
                <ul>
                  <li><a href="https://www.linkedin.com/in/angelika-gaszczyk-5885a7121" className="fo" target="_blank">Linkedin</a></li>
                  <li><a href="https://www.behance.net/angi007" className="fo" target="_blank">Behance</a></li>
                  <li><a href="https://twitter.com/girlco007" className="fo" target="_blank">Twitter</a></li>
                  <li><a href="https://github.com/girlco007" className="fo" target="_blank">Github</a></li>
                </ul>
            </Col>

            <Col xs={9} md={9} >
              <p className="react">Website designed and developed by Angelika Gaszczyk with React
                <img src={logo} alt="logo" className="App-logo" />
              </p>
            </Col>

          </Row>
        </Grid>
      </div>
    );
  }
}
