import React from 'react';
import "./portfolio.css";
import hangman from "../../assets/hangman.png"
import SportsQuiz from "../../assets/SportsQuiz.PNG"
const Portfolio = () => {
  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={hangman} alt="hangman-pic" />
            </div>
            <h3>Hangman</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/jjconway23/Hangman" className='btn'>Github</a>
              <a href="https://hangman-101.herokuapp.com/" className='btn btn-primary' target="_blank">Live Website</a>
            </div>
            
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={SportsQuiz} alt="Sports Quiz Website" />
            </div>
            <h3>Sports Quiz</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/jjconway23/sports-quiz" className='btn'>Github</a>
              <a href="https://jjconway23.github.io/sports-quiz/" className='btn btn-primary' target="_blank">Live Website</a>
            </div>
            
          </article>
          <article className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src="/" alt="" />
            </div>
            <h3>Portfolio Title goes here</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com/jjconway23/Hangman" className='btn'>Github</a>
              <a href="https://hangman-101.herokuapp.com/" className='btn btn-primary' target="_blank">Live Website</a>
            </div>
          </article>

        </div>

    </section>
  )
}

export default Portfolio