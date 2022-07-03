import React from 'react';
import "./portfolio.css";
import portfolioData from '../portfolioData.js';

const Portfolio = () => {
  const portfolioProjects = portfolioData.map(data => {
    return <article key={data.id} className='portfolio__item'>
            <div className="portfolio__item-image">
              <img src={data.image} alt={`${data.title}-pic`} />
            </div>
            <h3>{data.title}</h3>
            <div className="portfolio__item-cta">
              <a href={data.github} className='btn'>Github</a>
              {data.hasLiveWebsite && <a href={data.demo} className='btn btn-primary' target="_blank">Live Website</a>}
            </div>
            
    </article>
  })

  return (
    <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            {portfolioProjects}
        </div>

    </section>
  )
}

export default Portfolio