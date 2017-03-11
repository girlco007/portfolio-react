import React from 'react';
import './App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap'



export class Contact extends React.Component {
  render() {
    return (
      <div className='body'>
      <Grid >
        <Row className="about-header" >
          <Col md={6} mdOffset={3} className="project-head" >
            <h2>I can help</h2>
             <p>Get in touch & let's make something awesome together!</p>
            <Button className='contact' href="mailto:someone@yoursite.com">CONTACT ME</Button>
            <div className='mar'> </div>

          </Col>
        </Row>
        </Grid>
      </div>
    );
  }
}
