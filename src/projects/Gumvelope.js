import React from 'react';
import '../App.css';
import {Link} from 'react-router'
import gv from '../img/gv.png'
// import gvSpec from '../img/gvSpec.svg'
// import gvColor from '../img/gvColor.svg'
// import gvType from '../img/gvType.svg'

import {Grid, Row, Col, Image} from 'react-bootstrap'


export class Gumvelope extends React.Component {

  render() {
    return (
      <div className='body'>
        <div className="sub-header">
          <Grid>
            <Row className="show-grid">
              <Col sm={7} xsOffset={1} className="project-head">
                <h2 className='displayTitle'>Gumvelope</h2>
                <h4 className='displayGray'>Website design</h4>
                <Row className='infoSection'>
                  <Col xs={2}>
                    <p className='display'>Role</p>
                  </Col>
                  <Col xs={5}>
                    <p>Designer/Developer</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <p className='display'>Link</p>
                  </Col>
                  <Col xs={4}>
                    <a href="http://gumvelopes.com/" target="_blank" className='linkGv'>http://gumvelopes.com/</a>
                  </Col>
                  </Row>
                  <Row>
                  <Col xs={2}>
                    <p className='display'>About</p>
                  </Col>
                  <Col xs={10}>
                    <p>Gumvelopes are the easy and cost-effective way to dispose gum and decrease gum litter. <br/> Gumvelopes are biodegradable and can be fully customized with advertising or company
                        and brand logos. They fit seamlessly into the current hygene set-up of many facilities with
                        sanitizer stations.</p>
                  </Col>
                  </Row>

              </Col>
            </Row>
          </Grid>
        </div>
          <Grid>
            {/* <Row>
              <Col md={3} mdOffset={1} className='mar'>
                <h4>Typography</h4>
                <Image src={gvType} alt='growing minds spec' responsive />
              </Col>
            </Row> */}
            <Row>
              {/* <Col md={4} mdOffset={1} >
                <h4>Color Theory</h4>
                <Image src={gvColor} alt='growing minds spec' responsive />
              </Col> */}

              <Col xs={8} mdOffset={2}>
                 <Image src={gv} alt="growing minds" responsive  className='shadowBig'/>
              </Col>
            </Row>
          </Grid>

          <Grid>
            <Row className='mar-top'>
              <Col xs={2} xsOffset={1}>
                <Link to={'/nccs'} className="bottomLink">Growing Minds</Link>
              </Col>
              <Col xs={2}>
                <Link to={'/mama'} className="bottomLink">College Mama</Link>
              </Col>
              <Col xs={2}>
                <Link to={'/moda'} className="bottomLink">MODA+</Link>
              </Col>
              <Col xs={2}>
                <Link to={'/dd'} className="bottomLink">Daily Designs</Link>
              </Col>
              <Col xs={2} >
                <Link to={'/css'} className="bottomLink">Animation</Link>
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}
