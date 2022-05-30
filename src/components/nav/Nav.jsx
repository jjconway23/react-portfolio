import React from 'react';
import {AiFillHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {BiBook} from 'react-icons/bi'
import {BsLaptopFill} from 'react-icons/bs'
import {AiFillMessage} from 'react-icons/ai'

import "./nav.css";
const Nav = () => {
  return (
    <nav>
      <a href="#"><AiFillHome /></a>
      <a href="#about"><SiAboutdotme /></a>
      <a href="#experience"><BiBook/></a>
      <a href="#portfolio"><BsLaptopFill /></a>
      <a href="#contact"><AiFillMessage /></a>

    </nav>
  )
}

export default Nav