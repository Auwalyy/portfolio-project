import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i52vhin', 'template_tsx8ptx', form.current, 'aDar8Z_Ssw1bcorS8')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again later.');
      });

    e.target.reset(); // Reset form after submission
  };

  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div id='contact' className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free to contact me.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /><p>auwaluizziddin2212@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /><p>+2347043995559</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /><p>Kano, Nigeria</p>
            </div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label htmlFor="email">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' required />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" placeholder='Enter your message' rows='8' required></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
