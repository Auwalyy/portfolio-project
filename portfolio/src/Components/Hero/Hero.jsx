import React from 'react';
import './Hero.css';
import profile_img from '../../assets/profile_img.svg';
import auwal from '../../assets/auwal.jpg'

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={auwal} alt="" />
            <h1> <span>I'm Auwalu Muhammad Izziddin</span>, frontend developer.</h1>
            <p>I am a frontend developer</p>
            <div className="hero-action">
                <div className="hero-connect">Connect With Me</div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero