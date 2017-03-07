import React, { Component } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
// import './App.css';

import {Root} from './Root';
import {Home} from './Home';
import {AboutMe} from './AboutMe';
import {Resume} from './Resume';
import {Contact} from './Contact';

import {Mama} from './projects/Mama';
import {Gumvelope} from './projects/Gumvelope';
import {Moda} from './projects/Moda';
import {NCCS} from './projects/nccs';
import {Animations} from './projects/cssAnimations';



class App extends Component {
  render() {
    return (

      <Router history={browserHistory}>
        <Route path={"/"} component={Root}>
          <IndexRoute component={Home} />
          <Route path={"home"} component={Home} />
          <Route path={"aboutme"} component={AboutMe} />
          <Route path={"resume"} component={Resume} />
          <Route path={"contact"} component={Contact} />

          <Route path={"mama"} component={Mama} />
          <Route path={"gv"} component={Gumvelope} />
          <Route path={"moda"} component={Moda} />
          <Route path={"nccs"} component={NCCS} />
          <Route path={"css"} component={Animations} />

        </Route>
      </Router>
    );
  }
}

export default App;
