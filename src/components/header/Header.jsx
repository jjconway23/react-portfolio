import React from 'react';
import HeaderButtons from './HeaderButtons';
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jacob Peat</h1>
        <h5>Junior Full Stack Developer</h5>
        <HeaderButtons />

      </div>

    </header>
  )
};

export default Header