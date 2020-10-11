import React from 'react';
import './App.css';
import { Button } from './components/Buttons';
import { Calculator } from './components/Calculators';

const day = "Current Exchange Value";


function App() {
  // JSX
  return (
    <div className="App">
      <p>{day}</p>
      <Calculator></Calculator>

   {/* <App>
      <Header>
        <Menu></Menu>
      </Header>

      <Main>

      </Main>

      <Footer>

      </Footer>
    </App>  */}

    </div>
  );
}

export default App;
