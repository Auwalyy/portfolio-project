import React from 'react'
import theme_pattern  from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';
import muhammad from '../../assets/muhammad.jpg'
import './About.css'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={muhammad} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, omnis?</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, sequi.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HMTL & CSS</p><hr /></div>
                        <div className="about-skill"><p>Javascript</p><hr /></div>
                        <div className="about-skill"><p>React JS</p><hr /></div>
                        <div className="about-skill"><p>Taiwind CSS</p><hr /></div>
                        <div className="about-skill"><p>BootStrap CSS</p><hr /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About