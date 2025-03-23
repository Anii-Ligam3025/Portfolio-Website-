import React from 'react'
import "./About.css"
import profile_img from "../../assets/image (4).png";
const About = () => {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className='about-left'>
            <img src={profile_img} alt="" height="400px"/>
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m a passionate Full-Stack Developer with a love for building dynamic and user-friendly web applications. I specialize in front-end and back-end development, bringing ideas to life with HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB/MySQL. </p>
                <p>Proficient in modern frameworks and tools, ensuring seamless user experiences and robust backend systems.</p>
            </div>
            <div className='about-skills'>
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>React Js</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Node Js</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className='about-achievement'>
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr/>
        <div className='about-achievement'>
            <h1>20+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
<hr/>
<div className='about-achievement'>
            <h1>05+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
