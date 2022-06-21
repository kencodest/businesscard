import React from 'react';
import image from './ken.jpg'
import logo from './logo.svg'
// import image from './bill-gates.png'
import { HiMail } from "react-icons/hi";
import { FaLink, FaLinkedin } from "react-icons/fa"


function Info() {
  return (
      <div className="info">
        <div className='info--image'>
          <img src={image} className="header--image" alt="image"/>
        </div>
        <h2>Kennedy Muia</h2>
        <div className='info--sub-title'>
          <img src={logo} alt="react-logo" />
          <h3>Frontend Developer</h3>
        </div>
        <div className='info--link'>
          < FaLink className='icon'/>
          <a href="https://kenmuia.me/" target="_blank">kenmuia.me</a>
        </div>
        <div className='info--buttons'>
          <div className='info--email'> 
            <HiMail size="1.3rem"/>
            <a href='mailto:kenchezbruce@gmail.com' target="_blank">Email</a>
          </div>
          
          <div className='info--linkedin'>
            < FaLinkedin color='white' size="1.3rem"/>
            <a href='https://www.linkedin.com/in/kennedymuia/' target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
  );
}

export default Info;
