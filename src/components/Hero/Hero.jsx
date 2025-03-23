import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/image (4).png";
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img} alt="" height="200px"/>
      <h1><span>I'm Aniket Ligam,</span> FullStack developer.</h1>
      <p>I am a fullstack developer from Mumbai, currently I'm increasing my coding skills and gain knowledge from various projects.</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect With me </div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
