import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Link,
  Route
} from 'react-router-dom';

import Navigation from './components/Navigations/Navigation';

import Calculator from '../src/pages/Calculators/Calculator';
import './App.css';



function App() {
  // JSX
  return (
    <div className="App">

      <Router>
          <Navigation></Navigation>

            <Route>
            <Calculator></Calculator>
            </Route>
            {/* <Route path="/flags">
            <Flags></Flags>
            </Route> */}

        </Router>

    </div>
  );
}

export default App;
