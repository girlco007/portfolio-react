import React from 'react';
import '../App.css';
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
        <Grid>
          <Row className="show-grid sub-header">
            <Col xs={7} xsOffset={1}>
              <h2>MODA+</h2>
              <h4>Mobile App</h4>
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
                  <a href="https://itunes.apple.com/us/app/moda-plus/id1148484782?mt=8" target="_blank">Download Moda+ App</a>
                </Col>
              </Row>
              <Row>
                <Col md={9}>
                  <p>MODA+ is a mobile fashion app for individuals to showcase, inspire, and explore work within the growing fashion community. </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Image src={baner} responsive/>
            </Col>
          </Row>

          <Row>
            <Col xs={6} xsOffset={2}>
              <p>The goal for this design was to clean up the existing visual aesthetics. Since the main functions of the app are very similar to others, the challenge was to make it feel different. Also, the developer needed a simple design that could be built in two months max. The app is now in the app store for free download with these designs.</p>
            </Col>
            <Col xs={2}>
              <Image src={icon} alt='moda-plus icon' responsive/>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <h3>Login/Sing Up Screens</h3>
            </Col>
            <Col md={8} mdOffset={2}>
              <Image src={login} alt='login and singup screens' responsive/>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <h3>Working</h3>
            </Col>
            <Col md={10} mdOffset={1}>
              <Image src={work} alt='eork example' responsive/>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <h3>iOS App Store Screenshots</h3>
            </Col>
            <Col md={3} sm={6}>
              <Image src={Img1} alt='gumvelope spec' responsive className='StoreShoots' />
            </Col>
            <Col md={3} sm={6}>
               <Image src={Img2} alt="gunvelope site" responsive className='StoreShoots'  />
            </Col>
            <Col md={3} sm={6}>
              <Image src={Img3} alt='gumvelope spec' responsive className='StoreShoots'/>
            </Col>
            <Col md={3} sm={6}>
               <Image src={Img4} alt="gunvelope site" responsive className='StoreShoots'  />
            </Col>
          </Row>
        </Grid>

        <Row>
          <Col md={6} mdOffset={3}>
            <div style={{width: 660, height: 'auto'}}>
              <ResponsiveEmbed a16by9>
                <embed type="image/svg+xml" src="https://www.youtube.com/embed/G8-XeHB-B6M" />
              </ResponsiveEmbed>
            </div>

          </Col>
        </Row>


      </div>
    );
  }
}
