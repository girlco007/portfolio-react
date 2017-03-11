import React from 'react';
import {browserHistory} from 'react-router';
import './App.css';

// import modaCover from './img/modaCover.png';
import modaCover1 from './img/modaCover1.png';
import modaCover2 from './img/modaCover2.png';


import gv1 from './img/gv1.png'
import growingMinds from './img/growingMinds.png'
import cm from './img/cm.png'
import designScreen from './img/designScreen.svg'
import devScreen from './img/devScreen.svg'



// import box from './img/box.png'
// import boxx from './img/boxx.png'


import {Grid, Row, Col, Image} from 'react-bootstrap'


export class Home extends React.Component {

  onGumvelope(){
    browserHistory.push('/gv')
  }

  onCollegeMama(){
    browserHistory.push('/mama')
  }

  onModa(){
    browserHistory.push('/moda')
  }

  onNCCS(){
    browserHistory.push('/nccs')
  }

  onAnimation(){
    browserHistory.push('/css')
  }

  render() {
    return (
      <div className='body'>
        <Grid>
          <Row className="show-grid header">
            <Col xs={6} xsOffset={1} >
               <h1 className="main-text">I'm angie.</h1>
               <hr className='line'/>
               <p>Designer currently drinking coffee helping
                   startups design their products
                   and grow their businesses.</p>
            </Col>
          </Row>
        </Grid>
        <div className="App-header">

          <Grid>
            <Row className="show-grid">
              <Col sm={12} md={4}>
                <Row>
                  <Col sm={12}>
                    <Image src={growingMinds} alt="Growing minds" responsive onClick={this.onNCCS} className="box" />
                    {/* Optimize cover image! */}
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Image src={cm} alt="Collage Mama" responsive onClick={this.onCollegeMama} className="box" />
                  </Col>
                </Row>
              </Col>

              <Col sm={12} md={4}>
                <Row>
                  <Col md={12} smHidden xsHidden>
                    <Image src={modaCover1} alt="moda" responsive onClick={this.onModa} className="box" />
                  </Col>
                  <Col sm={12} mdHidden lgHidden>
                    <Image src={modaCover2} alt="moda" responsive onClick={this.onModa} className="box" />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Image src={designScreen} alt="designs" responsive onClick={this.onGumvelope} className="box" />
                    {/* css */}
                  </Col>
                </Row>
              </Col>

              <Col sm={12} md={4}>
                <Row>
                  <Col sm={12}>
                    <Image src={gv1} alt="gumvelope" responsive onClick={this.onGumvelope} className="box" />

                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Image src={devScreen} alt="dev" responsive onClick={this.onGumvelope} className="box" />
                    {/* just for fun */}
                  </Col>
                </Row>
              </Col>
            </Row>
{/* breake point and 2 covers for moda (long and normal size) */}

          </Grid>
        </div>
      </div>
    );
  }
}
