import React from 'react';
import '../App.css';
import NCCSa from '../img/NCCSa.png'
import nccsSpec from '../img/nccsSpec.svg'

import {Grid, Row, Col, Image} from 'react-bootstrap'


export class NCCS extends React.Component {

  render() {
    return (
      <div className='body'>
        <Grid>
          <Row className="show-grid sub-header">
            <Col xs={7} xsOffset={1}>
              <h2>Growing Minds Early Education Programs</h2>
              <h4>Website</h4>
              <Row>
                <Col xs={1}>
                  <p>Role</p>
                </Col>
                <Col xs={3}>
                  <p>Designer</p>
                </Col>
              </Row>
              <Row>
              <Col xs={1}>
                <p>Link</p>
              </Col>
              <Col xs={3}>
                <a href="http://www.sdnccs.org/" target="_blank">http://www.sdnccs.org/</a>
              </Col>
              </Row>
              <p>North County Community Services now operating as Growing Minds Early Education Programs is a nonprofit
                organization in Northern San Diego County.  Growing Minds is passionately committed to improving people health and well being by providing programs that educate young children, support working families,
                and ultimately create opportunities to improve the quality of life for residents of North County.</p>
            </Col>
          </Row>
          <Row>
            <Col md={2} mdOffset={1} xsHidden>
              <Image src={nccsSpec} alt='growing minds spec' responsive className="margin"/>
            </Col>
            <Col xs={8} mdOffset={1}>
               <Image src={NCCSa} alt="growing minds" responsive className='shadow' />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
