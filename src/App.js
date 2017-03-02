import React, { Component } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
// import './App.css';

import {Root} from './Root';
import {Home} from './Home';
import {AboutMe} from './AboutMe';
import {Resume} from './Resume';
import {Contact} from './Contact';



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

        </Route>
        {/* <Route path={"home"} component={Home} /> */}
      </Router>
    );
  }
}

export default App;
