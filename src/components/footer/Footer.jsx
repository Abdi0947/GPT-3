import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div>
      <div className='gpt3__footer-heading'>
        <h2>Do you want to step in to the future before others</h2>
        <button type='submit'>Request Early access</button>
      </div>
      <div className='gpt3__footer-contents'>
        <div className='image-name'>
          <img src={logo} alt='logo'/>
          <p>Abdi D.</p>
        </div>
        <div className='gpt3__footer-links'>
          <h4>links</h4>
          <ul>
            <li>overons</li>
            <li>Social media</li>
            <li>counters</li>
            <li>contact</li>
          </ul>
        </div>
        <div className='gpt3__footer-company'>
          <h4>company</h4>
          <ul>
            <li>terms&conditions</li>
            <li>privacy policy</li>
            <li>contact</li>
          </ul>
        </div>
        <div className='gpt3__footer-getintouch'>
          <h4>Get in Touch</h4>
          <ul>
            <li>Abdi D.</li>
            <li>+251947526347</li>
          </ul>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
           <p> &copy;2024 GPT-3. All rights reserved.</p>
      </div>
    
    </div>
  )
}

export default Footer;
