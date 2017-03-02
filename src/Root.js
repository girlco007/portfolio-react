import React, {Component} from 'react';
// import {Header} from "./Header"
import {NavBar} from "./NavBar"
import {Footer} from "./Footer"


export class Root extends Component {
  render() {
    // console.log(this.props.children);
    return (
      <div>
        <NavBar />
        <div>
            {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
