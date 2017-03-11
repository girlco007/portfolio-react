import React from 'react';
import '../App.css';
import {Link} from 'react-router'
import Img1 from '../img/modaStore/Img1.jpg';
import Img2 from '../img/modaStore/Img2.jpg';
import Img3 from '../img/modaStore/Img3.jpg';
import Img4 from '../img/modaStore/Img4.jpg';
import baner from '../img/modaStore/baner.png';
import icon from '../img/modaStore/icon.png';
import login from '../img/modaStore/login.png';
import work from '../img/modaStore/work.png';


import {Grid, Row, Col, Image, ResponsiveEmbed} from 'react-bootstrap'


export class Moda extends React.Component {

  render() {
    return (
      <div className='body'>
        <div className="sub-header">
          <Grid>
            <Row className="show-grid">
              <Col sm={7} xsOffset={1} className="project-head">
                <h2 className='displayTitle'>MODA+</h2>
                <h4 className='displayGray'>Mobile App</h4>
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
                    <a href="https://itunes.apple.com/us/app/moda-plus/id1148484782?mt=8" target="_blank" className='linkModa'>Download <strong> MODA+ </strong> App</a>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <p className='display'>About</p>
                  </Col>
                  <Col xs={10}>
                    <p>MODA+ is a mobile fashion app for individuals to showcase, inspire, and explore work within the growing fashion community. </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </div>

          <Grid>
          <Row>
            <Col md={12} className='mar'>
              <Image src={baner} responsive/>
            </Col>
          </Row>

          <Row className='mar'>
            <Col xs={6} xsOffset={2} >
              <p className="pModa">The goal for this design was to clean up the existing visual aesthetics. Since the main functions of the app are very similar to others, the challenge was to make it feel different. Also, the developer needed a simple design that could be built in two months max. The app is now in the app store for free download with these designs.</p>
            </Col>
            <Col xs={2}>
              <Image src={icon} alt='moda-plus icon' responsive/>
            </Col>
          </Row>

          <Row className='mar'>
            <Col md={12}>
              <h4>Login/Sing Up Screens</h4>
            </Col>
            <Col md={8} mdOffset={2}>
              <Image src={login} alt='login and singup screens' responsive/>
            </Col>
          </Row>

          <Row className='mar'>
            <Col xs={3} md={1}>
              <h4>Example</h4>
            </Col>
            {/* <Col xs={9} md={5}>
              <p>Example description</p>
            </Col> */}
          </Row>

            <Row>
            <Col md={10} mdOffset={1}>
              <Image src={work} alt='work example' responsive/>
            </Col>
          </Row>

          <Row className='mar'>
            <Col md={12}>
              <h4>iOS App Store Screenshots</h4>
            </Col>
            <Col md={3} sm={6}>
              <Image src={Img1} alt='IOS screen 1' responsive className='StoreShoots' />
            </Col>
            <Col md={3} sm={6}>
               <Image src={Img2} alt="IOS screen 2" responsive className='StoreShoots'  />
            </Col>
            <Col md={3} sm={6}>
              <Image src={Img3} alt='IOS screen 3' responsive className='StoreShoots'/>
            </Col>
            <Col md={3} sm={6}>
               <Image src={Img4} alt="IOS screen 4" responsive className='StoreShoots'  />
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row className='mar'>
            <Col md={1}>
              <h4>Video</h4>
            </Col>
            {/* <Col md={5}>
              <p>Video description</p>
            </Col> */}
            </Row>

            <Row>
            <Col md={5} mdOffset={2}>
              <div style={{width: 660, height: 'auto'}}>
                <ResponsiveEmbed a16by9>
                  <embed type="image/svg+xml" src="https://www.youtube.com/embed/G8-XeHB-B6M" />
                </ResponsiveEmbed>
              </div>

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
