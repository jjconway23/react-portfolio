import React from 'react';
import "./experience.css";
import {BsFillCheckSquareFill} from "react-icons/bs"
const Experience = () => {
  return (
    <section id="experience">
        <h5>The Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experence__content">
              <article className="experience__details">
                <BsFillCheckSquareFill />
              </article>

            </div>

          </div>
          <div className="backend__experience">

          <div className="experence__content"></div>

          </div>

        </div>

    </section>
  )
}

export default Experience