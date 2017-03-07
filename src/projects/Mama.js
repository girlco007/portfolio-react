import React from 'react';
import '../App.css';

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
      <div className='body '>
        <Grid>
          <Row className="show-grid sub-header">
            <Col xs={6} xsOffset={1}>
              <h2>College mama - documentary movie</h2>
              <h4>Lookbook</h4>
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
                <a href="https://momscollegelife.wordpress.com" target="_blank">https://momscollegelife.com</a>
              </Col>
              </Row>
              <Row>
                <Col md={5}>
                  <p>something</p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md={6} mdOffset={3} >
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
      </div>
    );
  }
  // onOpen = evt => {
  //    this.setState({ lightboxIsOpen: true })
  //  }
  //
  //  onClose = evt => {
  //    this.setState({ lightboxIsOpen: false })
  //  }
  //
  //  onClickPrev = evt => {
  //    this.setState({ currentImage: Math.max(0, this.state.currentImage - 1) })
  //  }
  //
  //  onClickNext = evt => {
  //    this.setState({
  //      currentImage: Math.min(this.state.images.length - 1, this.state.currentImage + 1)
  //    })
  //  }
}

// onHover if hover change z-index to 99
