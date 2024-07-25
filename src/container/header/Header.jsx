import React from 'react'
import './header.css'
import AI from '../../assets/ai.png';
import people from '../../assets/people.png';
const Header = () => {
  return (
    <div className='gpt3__header'>
      <div className='non-image-part'>
        <div className='gpt3__header-component'>
          <h1>Let us build something amazing with GPT3 Open AI</h1>
          <div className='paragraphs'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vitae animi labore modi itaque officia dolores consectetur, laboriosam at corrupti earum quos sunt! Temporibus minima vitae quis excepturi molestiae vero! </p>
          </div>
          <div className='get-started'>
              <input type='search' placeholder='enter-email-address'/>
              <button type='submit'>Get Started</button>
          </div>
          <div className='witness'>
            <img src={people} alt='witness'/>
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
      </div>
      <div className='ai-image'>
        <img src={AI} alt="logo"/>
      </div>

    </div>
  )
}

export default Header
