import React from 'react'
import CV from "../../assets/Jacob Peat - CV.pdf"
const HeaderButtons = () => {
  return (
    <div className="cta">
        <a href={CV} className="btn">Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default HeaderButtons