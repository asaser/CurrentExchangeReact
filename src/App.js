import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

import Calculator from './pages/Calculator';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';

// import { Button } from './components/Buttons';

const day = "Current Exchange Value";


function App() {
  // JSX
  return (
    <div className="App">
        <p>{day}</p>

      <Router>
          <ul>
           <li><Link to="">HOME</Link></li>
           <li><Link to="/about">ABOUT</Link></li>
           <li><Link to="/contact">CONTACT</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact>
            <Calculator></Calculator>
            </Route>
            <Route path="/about">
            <About></About>
            </Route>
            <Route path="/contact">
            <Contact></Contact>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
