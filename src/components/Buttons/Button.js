import React from 'react';
import Button from 'react-bootstrap/Button';


function ButtonClick(props) {
    return (
      <button>{props.label}</button>
    );
  }
  ButtonClick.defaultProps =  {
    label: "Click"
  }

  export default Button;
