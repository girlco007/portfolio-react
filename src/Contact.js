import React from 'react';
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap'



export class Contact extends React.Component {
  render() {
    return (
      <div className='body'>
        <Grid>
          <Row className="show-grid sub-header">
            <Col xs={7} xsOffset={1}>
              <h2 >I can help </h2>
              <p>If you have a project you care about I would love to talk to you!</p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
