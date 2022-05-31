import React from 'react';
import HeaderButtons from './HeaderButtons';
import HeaderSocials from './HeaderSocials';
import "./header.css";
import ME from "../../assets/ME.jpg"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Jacob Peat</h1>
        <h5>Junior Full Stack Developer</h5>
        <HeaderButtons />
        <HeaderSocials />
        <div className="me-container">
            {/* <img src={ME} alt="me" className='me' /> */}
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
};

export default Header