import React from 'react';
import {browserHistory} from 'react-router';
import './App.css';

import modaCover from './img/modaCover.png';
import gv1 from './img/gv1.png'
import growingMinds from './img/growingMinds.png'
import cm from './img/cm.png'

import {Grid, Row, Col, Image} from 'react-bootstrap'


export class Home extends React.Component {

  onGumvelope(){
    browserHistory.push('/gv')
  }

  onCollegeMama(){
    browserHistory.push('/mama')
  }

  onModa(){
    browserHistory.push('/moda')
  }

  onNCCS(){
    browserHistory.push('/nccs')
  }

  onAnimation(){
    browserHistory.push('/css')
  }

  render() {
    return (
      <div className='body'>
        <Grid>
          <Row className="show-grid header">
            <Col xs={10} xsOffset={1} >
               <h1 className="main-text">Angelika Gaszczyk, a designer.</h1>
               <hr className='line'/>
               <p>A designer, with passion for creating user friendly interfaces for both mobile devices and web applications.<br />
                   I can also develop static websites with responsive design. </p>
            </Col>
          </Row>
        </Grid>
        <div className="App-header">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={6}>
                  <Image src={gv1} alt="gumvelope" responsive onClick={this.onGumvelope} className="box" />
              </Col>

              <Col xs={12} md={6}>
                    <Image src={modaCover} alt="moda" responsive onClick={this.onModa} className="box" />
              </Col>
            </Row>


            <Row className="show-grid">
              <Col xs={12} md={6}>
                  <Image src={growingMinds} alt="Groving Minds" responsive onClick={this.onNCCS} className="box" />
              </Col>

              <Col xs={12} md={6}>
                  <Image src={cm} alt="Collage Mama" responsive onClick={this.onCollegeMama} className="box" />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
