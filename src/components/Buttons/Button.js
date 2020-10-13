import React from 'react';

function Button(props) {
    return (
      <button>{props.label}</button>
    );
  }
  Button.defaultProps =  {
    label: "Click"
  }

  export default Button;
