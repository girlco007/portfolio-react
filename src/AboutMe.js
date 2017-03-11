import React from 'react';
import './App.css';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';

import me from './img/me.png';


export class AboutMe extends React.Component {
  render() {
    return (
      <div className='body'>
      <Grid>
        <Row className="about-header">
          <Col md={6} mdOffset={1} className="project-head">
            <h1 className='Iam'>Hi!</h1>
            {/* <h3 >I'm angie.</h3> */}
            <p>My name is Angelika Gaszczyk and I’m an independent digital designer.</p>
            <Button className='contact' href="mailto:someone@yoursite.com">CONTACT ME</Button>
          </Col>
          <Col md={4}>
            <Image src={me} alt="me" className='me'/>
          </Col>
        </Row>
        {/* <hr /> */}

        <Row className="show-grid ">
          <Col md={2} mdOffset={1}>
            <h3>Skills</h3>
          </Col>
        </Row>

        <Row className="show-grid ">
          <Col md={10} mdOffset={2} >
            <p><strong>design</strong></p>
          </Col>
        </Row>

        <Row>
          <Col md={9} mdOffset={3}>
              <Col md={5} >
                <p>User-Experience (UX)</p>
                <p>User-Interface (UI)</p>
                <p>App Design</p>
              </Col>
                <Col md={5} >
                <p>Web Design</p>
                <p>Marketing Design</p>
                <p>Prototyping</p>
              </Col>
          </Col>
        </Row>

        <Row>
          <Col md={10} mdOffset={2} >
            <p className='mar-top'><strong>dev</strong></p>
          </Col>
        </Row>
        <Row>
          <Col md={9} mdOffset={3}>
              <Col md={5} >
                <p>HTML, HAML, JADE</p>
                <p>CSS, SASS, LESS</p>
                <p>JavaScript</p>
              </Col>
                <Col md={5} >
                <p>Basic React</p>
                <p>Bootstrap</p>
                <p>something</p>
              </Col>
          </Col>
        </Row>
<hr />

        <Row className="show-grid ">
          <Col md={2} mdOffset={1}>
            <h3>Experience</h3>
          </Col>
        </Row>

        <Row className="show-grid ">
          <Col md={3} mdOffset={3}>
            <p><strong>bla bla bla</strong></p>

            <Col md={11} mdOffset={1}>
              <p>bla bla bla</p>
              <p>bla bla bla</p>
              <p>bla bla bla</p>
            </Col>

          </Col>
        </Row>
        <Row className="show-grid ">
          <Col md={4} mdOffset={3}>
            <p><strong>bla bla bla</strong></p>
            <Col md={11} mdOffset={1}>
              <p>bla bla bla</p>
              <p>bla bla bla</p>
              <p>bla bla bla</p>
            </Col>
          </Col>
        </Row>
        <Row className="show-grid ">
          <Col md={4} mdOffset={3}>
            <p><strong>bla bla bla</strong></p>
            <Col md={11} mdOffset={1}>
              <p>bla bla bla</p>
              <p>bla bla bla</p>
              <p>bla bla bla</p>
            </Col>
          </Col>
        </Row>

        {/* <Row className="show-grid">
          <Col md={6} mdOffset={3}>
            <h2 className="angie">Hi, I'm angie!</h2>
            <p className="center-text">I'm a web designer in San Francisco, California. I am passionate about design and love to create for web and mobile.</p>
          </Col>
        </Row> */}
      </Grid>

      {/* <Grid>
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

      </Grid> */}
    </div>
    );
  }
}
