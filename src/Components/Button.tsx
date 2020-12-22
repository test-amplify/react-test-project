import React from 'react';
import '../Styles/Button.css';

interface Props {
  value: string;
  onClick: Function;
  buttonStyle: React.CSSProperties;
}

const Button = ({ value, onClick, buttonStyle }: Props): JSX.Element => (
  <button
    className="app-button"
    onClick={(event) => onClick(event)}
    style={buttonStyle}
    type='button'
  >
    {value}
  </button>
);

export default Button;