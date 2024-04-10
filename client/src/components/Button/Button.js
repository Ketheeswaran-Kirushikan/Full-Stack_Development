import React from 'react';
import './Button.css';

const Button = (props) => {
  const handleClick = (event) => {
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <div>
      <button className={props.className} onClick={handleClick}>
        {props.icon && <props.icon className={props.className} />}{props.name}
      </button>
    </div>
  );
};

export default Button;
