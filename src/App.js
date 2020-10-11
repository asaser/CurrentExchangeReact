import React from 'react';
import './App.css';
import { Button } from './components/Buttons';
import { Calculator } from './components/Calculators';

const day = "Hi";


function App() {
  // JSX
  return (
    <div className="App">
      <p>Hello!</p>
      <p>{day}</p>
      <Calculator></Calculator>

      <Button label="Don't click me"></Button>
      <Button label="sdsdsd"></Button>
      <Button></Button>


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
