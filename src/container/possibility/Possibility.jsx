import React from 'react'
import './possibility.css';
import PossibilityImage from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <div className='gpt3__possibility-all'>
      <div className='gpt3__possibility' id='possibility'>
        <div className='gpt3__possibility-image'>
          <img src={PossibilityImage}/>
        </div>
        <div className='gpt3__possibility-text'>
          <h4>request Early Access to get Started</h4>
          <h1>The possibilities are beyond your imagination</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Officia praesentium libero aliquid.<br/> Harum nemo nulla illum cumque, eum velit,<br/> placeat tempora natus assumenda ratione doloribus tenetur sapiente. <br/>Expedita, sapiente delectus?</p>
          <h4>request Early Access to get Started</h4>
        </div>
      </div>
    </div>
  )
}

export default Possibility
