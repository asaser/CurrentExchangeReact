import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

import Calculator from './pages/Calculator';
// import Flags from './pages/Flags';
import Navigation from './components/Navigations/Navigation';

import './App.css';

// import { Button } from './components/Buttons';

const day = "Current Exchange Value";


function App() {
  // JSX
  return (
    <div className="App">
        <p>{day}</p>

      <Router>
          {/* <ul>
           <li><Link to="">HOME</Link></li>
           <li><Link to="/flags">Flags</Link></li>
          </ul> */}
          <Navigation></Navigation>
          <Switch>
            <Route path="/" exact>
            <Calculator></Calculator>
            </Route>
            {/* <Route path="/flags">
            <Flags></Flags>
            </Route> */}
          </Switch>
        </Router>
    </div>
  );
}

export default App;
