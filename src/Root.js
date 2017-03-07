import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {NavBar} from "./NavBar"
import {Footer} from "./Footer"


export class Root extends Component {
  onNavigateProjects(){
    browserHistory.push('/home')
  }
  
  render() {
    // console.log(this.props.children);
    return (
      <div>
        <NavBar
        projects={() => this.onNavigateProjects()} />
        <div>
            {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
