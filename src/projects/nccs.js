import React from 'react';
import '../App.css';
import {Link} from 'react-router'

import foo from '../img/gm/foo.png';
import pre from '../img/gm/pre.png';
import vol from '../img/gm/vol.png';
import main from '../img/gm/main.png'

import {Grid, Row, Col, Image} from 'react-bootstrap'


export class NCCS extends React.Component {

  render() {
    return (
      <div className='body'>
        <div className="sub-header">
          <Grid>
            <Row className="show-grid">
              <Col sm={7} xsOffset={1} className="project-head">
                <h2 className='displayTitle'>Growing Minds</h2>
                <h4 className='displayGray'>Website design</h4>
                <Row className='infoSection'>
                  <Col xs={2}>
                    <p className='display'>Role</p>
                  </Col>
                  <Col xs={5}>
                    <p>Designer</p>
                  </Col>
                </Row>

                <Row>
                  <Col xs={2}>
                    <p className='display'>Link</p>
                  </Col>
                  <Col xs={3}>
                    <a href="http://www.sdnccs.org/" target="_blank" className='link'>http://www.sdnccs.org/</a>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <p className='display'>About</p>
                  </Col>
                  <Col xs={10}>
                  <p>North County Community Services now operating as Growing Minds Early Education Programs is a nonprofit
                  organization in Northern San Diego County.  Growing Minds is passionately committed to improving people health and well being by providing programs that educate young children, support working families,
                  and ultimately create opportunities to improve the quality of life for residents of North County.</p>
                  </Col>
              </Row>
              </Col>
            </Row>
          </Grid>
        </div>
          <Grid>

            <Row>
              <Col md={10} mdOffset={1}>
                 <Image src={main} alt="growing minds" responsive className='shadowBig' />
              </Col>
           </Row>

           {/* <Row>
             <Col md={10} mdOffset={1}>
               <p>North County Community Services now operating as Growing Minds Early Education Programs is a nonprofit
               organization in Northern San Diego County.  Growing Minds is passionately committed to improving people health and well being by providing programs that educate young children, support working families,
               and ultimately create opportunities to improve the quality of life for residents of North County.</p>
             </Col>
          </Row> */}

           <Row>
              <Col md={6} >
                 <Image src={foo} alt="growing minds" responsive className='shadow' />
              </Col>

              <Col md={6} >
                <Row>
                  <Col md={12}>
                    <Image src={pre} alt="growing minds" responsive className='shadow' />
                  </Col>
                </Row>

                <Row>
                  <Col md={12}>
                    <Image src={vol} alt="growing minds" responsive className='shadow' />
                  </Col>
                </Row>

              </Col>
            </Row>
        </Grid>

        <Grid>
          <Row className='mar-top'>
            <Col xs={2} xsOffset={1}>
              <Link to={'/moda'} className="bottomLink">MODA+</Link>
            </Col>
            <Col xs={2}>
              <Link to={'/mama'} className="bottomLink">College Mama</Link>
            </Col>
            <Col xs={2}>
              <Link to={'/gv'} className="bottomLink">Gumvelope</Link>
            </Col>
            <Col xs={2}>
              <Link to={'/dd'} className="bottomLink">Daily Designs</Link>
            </Col>
            <Col xs={2}>
              <Link to={'/css'} className="bottomLink">Animation</Link>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
