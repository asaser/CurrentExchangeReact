import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

import Calculator from './pages/mainPage/CurrenctExchange';
// import Flags from './pages/Flags';
import Navigation from './components/Navigations/Navigation';
import './App.css';



function App() {
  // JSX
  return (
    <div className="App">

      <Router>
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
