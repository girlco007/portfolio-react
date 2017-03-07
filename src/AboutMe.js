import React from 'react';
import './App.css';
import {Grid, Row, Col, Image} from 'react-bootstrap';

import meNormal from './img/meNormal.png';
import designScreen from './img/designScreen.svg';
import devScreen from './img/devScreen.svg';
import main from './img/main.svg';



export class AboutMe extends React.Component {
  render() {
    return (
      <div className='body'>
      <Grid>
        <Row className="sub-header">
          <Col md={8} mdOffset={2}>
            <Image src={main} alt="main image"/>
          </Col>
        </Row>
        <Row className="show-grid ">
          <Col md={4} mdOffset={4}>
            <Image src={meNormal} responsive alt='me' className="me" />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={6} mdOffset={3}>
            <h2 className="angie">Hi, I'm angie!</h2>
            <p className="center-text">I'm a web designer in San Francisco, California. I am passionate about design and love to create for web and mobile.</p>
          </Col>
        </Row>
      </Grid>

      <Grid>
        <Row className="show-grid">
          <Col md={5} mdOffset={1}>
            <Image src={designScreen} responsive alt='me' className="me" />
          </Col>
          <Col md={4}>
            <p>I'm a web designer in San Francisco, California. I am passionate about design and love to create for web and mobile.</p>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col md={5} mdOffset={1}>
            <p>I'm a web designer in San Francisco, California. I am passionate about design and love to create for web and mobile.</p>
          </Col>
          <Col md={4} >
            <Image src={devScreen} responsive alt='me' className="me" />
          </Col>
        </Row>

      </Grid>
    </div>
    );
  }
}
