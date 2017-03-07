import React from 'react';
import '../App.css';
import gv from '../img/gv.png'
import gvSpec from '../img/gvSpec.svg'

import {Grid, Row, Col, Image} from 'react-bootstrap'


export class Moda extends React.Component {

  render() {
    return (
      <div className='body'>
        <Grid>
          <Row className="show-grid sub-header">
            <Col xs={7} xsOffset={1}>
              <h2>MODA+</h2>
              <h4>Mobile App</h4>

              <p>Role - Designer</p>
              <p>something</p>
            </Col>
          </Row>
          <Row>
            <Col md={2} mdOffset={1} xsHidden>
              <Image src={gvSpec} alt='gumvelope spec' responsive className="margin"/>
            </Col>
            <Col xs={8} mdOffset={1}>
               <Image src={gv} alt="gunvelope site" responsive className='shadow' />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
