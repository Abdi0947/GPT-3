import React from 'react'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'
import './Brand.css'
const Brand = () => {
  return (
    <div className='brands-of-gpt3'>
      <div className='brand'>
        <img src={google} alt="brand"/>
        <img src={slack} alt="brand"/>
        <img src={atlassian} alt="brand"/>
        <img src={dropbox} alt="brand"/>
        <img src={shopify} alt="brand"/>
      </div>
   </div>
  )
}

export default Brand
