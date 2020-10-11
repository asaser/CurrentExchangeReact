import React from 'react';

function Button(props) {
    return (
      <button>{props.label}</button>
    );
  }
  Button.defaultProps =  {
    label: "Write something"
  }

  export default Button;
