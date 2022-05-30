import React from 'react';
import "./contact.css";
import {AiTwotoneMail} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
                <AiTwotoneMail />
                <h4>Email</h4>
                <h5>jacob.peat01@gmail.com</h5>
                <a href="mailto:jacob.peat01@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
                <BsWhatsapp />
                <h4>Whatsapp</h4>
                <a href="https://api.whatsapp.com/send?phone+447538521490" target="_blank">Send a message</a>
            </article>
          </div>
        </div>

    </section>
  )
}

export default Contact