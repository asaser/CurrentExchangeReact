import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Navigations/Navigation";
import Calculator from "./pages/Calculators/Calculator";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route>
            <Calculator></Calculator>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
