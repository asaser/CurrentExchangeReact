import React from 'react';
import './App.css';
import Button from './components/Buttons/Button';

const day = "Saturday";


function App() {
  // JSX
  return (
    <div className="App">
      <p>Hello!</p>
      <p>{day}</p>
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
