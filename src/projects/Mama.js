import React from 'react';
import '../App.css';
import {Link} from 'react-router'

import {Grid, Row, Col, Image} from 'react-bootstrap'

import cmCover from '../img/mamaPages/cmCover.png'
import mama1 from '../img/mamaPages/mama1.png'
import mama2 from '../img/mamaPages/mama2.png'
import mama3 from '../img/mamaPages/mama3.png'
import mama4 from '../img/mamaPages/mama4.png'
import mama5 from '../img/mamaPages/mama5.png'
import mama6 from '../img/mamaPages/mama6.png'
import mama7 from '../img/mamaPages/mama7.png'

export class Mama extends React.Component {

  render() {

    return (
      <div className='body'>
        <div className="sub-header">
          <Grid>
            <Row className="show-grid">
              <Col sm={7} xsOffset={1} className="project-head">
                <h2 className='displayTitle'>College Mama</h2>
                <h4 className='displayGray'>Lookbook</h4>
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
                <Col xs={4}>
                  <a href="https://momscollegelife.wordpress.com" target="_blank" className='linkMom'>https://momscollegelife.com</a>
                </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <p className='display'>About</p>
                  </Col>
                  <Col xs={10}>
                    <p>The main goal of College Mama project is to
support and encourage women who raise their children and attend school. This project calls for a change in society’s mindset about the traditional way of getting a degree, starting a career and having a family. This documentary offers a unique insight into motherhood told by female students with diverse backgrounds, coming from different countries, of different ages and different life stages.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>

        <Grid>
          <Row>
            <Col md={6} mdOffset={3} className='mar'>
              <Image src={cmCover} alt='College mama cover' responsive />
            </Col>
            <Col md={8} mdOffset={2} className="big">
              <Image src={mama1} alt='mama page 1' responsive  />
            </Col>
            <Col md={8} mdOffset={2} className="big">
               <Image src={mama2} alt="mama page 2" responsive  />
            </Col>
            <Col md={8} mdOffset={2} className="big">
              <Image src={mama3} alt='mama page 3' responsive />
            </Col>
            <Col md={8} mdOffset={2} className="big">
               <Image src={mama4} alt="mama page 4" responsive  />
            </Col>
            <Col md={8} mdOffset={2}className="big">
              <Image src={mama5} alt='mama page 5' responsive />
            </Col>
            <Col md={8} mdOffset={2} className="big">
               <Image src={mama6} alt="mama page 6" responsive  />
            </Col>
            <Col md={8} mdOffset={2} className="big">
               <Image src={mama7} alt="mama page 7" responsive  />
            </Col>
          </Row>
        </Grid>

        <Grid>
          <Row className='mar-top'>
            <Col xs={2} xsOffset={1}>
              <Link to={'/nccs'} className="bottomLink">Growing Minds</Link>
            </Col>
            <Col xs={2}>
              <Link to={'/moda'} className="bottomLink">MODA+</Link>
            </Col>
            <Col xs={2}>
              <Link to={'/gv'} className="bottomLink">Gumvelope</Link>
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
