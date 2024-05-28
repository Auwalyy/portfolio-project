import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'


const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-title">
            <h1>Get in tocuh</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div id='contact' className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I/m currently available to take on new projects, so feel free to contact me.</p>
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
            <form action="" className="contact-right">
                <label htmlFor="name">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="email">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" id="" placeholder='Enter your message' row='8'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact