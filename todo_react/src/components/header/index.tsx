import React from 'react';
import './styles.css';

type HeaderProps = {
    text:string
}

function Header(props:HeaderProps) {

  const {text} = props;

  return (
    <header className="header">
        <h1>{text}</h1>
    </header>
  );
}

export default Header;
