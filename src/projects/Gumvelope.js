import React from 'react';
import '../App.css';
import gv from '../img/gv.png'
import gvSpec from '../img/gvSpec.svg'

import {Grid, Row, Col, Image} from 'react-bootstrap'


export class Gumvelope extends React.Component {

  render() {
    return (
      <div className='body'>
        <Grid>
          <Row className="show-grid sub-header">
            <Col xs={7} xsOffset={1}>
              <h2>gumvelope</h2>
              <h4>Website</h4>

                <Row>
                  <Col xs={1}>
                    <p>Role</p>
                  </Col>
                  <Col xs={3}>
                    <p>Designer/Developer </p>
                  </Col>
                </Row>
                <Row>
                <Col xs={1}>
                  <p>Link</p>
                </Col>
                <Col xs={3}>
                  <a href="http://gumvelopes.com/" target="_blank">http://gumvelopes.com/</a>
                </Col>
                </Row>
              <p>Gumvelopes are the easy and cost-effective way to dispose gum and decrease gum litter.</p>
              <p>Gumvelopes are biodegradable and can be fully customized with advertising or company
                  and brand logos. They fit seamlessly into the current hygene set-up of many facilities with
                  sanitizer stations.</p>
            </Col>
          </Row>
          <Row>
            <Col md={2} mdOffset={1} smHidden xsHidden>
              <Image src={gvSpec} alt='gumvelope spec' responsive className="margin"/>
            </Col>
            <Col sm={12} md={8} mdOffset={1}>
               <Image src={gv} alt="gumvelope site" responsive className='shadow' />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
