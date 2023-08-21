import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Navigation from "./components/Navigations/Navigation";

import Calculator from "../src/pages/Calculators/Calculator";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Navigation></Navigation>
//         <Switch>
//           <Route>
//             <Calculator></Calculator>
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }

export default App;
