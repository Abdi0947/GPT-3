import React from 'react'
import './blog.css';
import {blog1,blog2,blog3,blog4,blog5} from './index.js';
const Blog = () => {
  return (
    <div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__heading'>
          <h2>Alot is happening we are blogging about it.</h2>
        </div>
       <div className='gpt3__blog-content'>
        <div className='gpt3__blog-one'>
              <img src={blog1} alt='blog'/>
              <p>date:july 6,2024</p>
              <h2>GPT-3 open AI is the fututre</h2>
              <p>Let us explore how it is?</p>
        </div>
        <div>
          <div className='gpt3__blog-two-three'>
              <div className='gpt3__blog'>
                <img src={blog2} alt='blog'/>
                <p>date:july 6,2024</p>
                <h2>GPT-3 open AI is the fututre</h2>
                <p>Let us explore how it is?</p>
              </div>
              <div className='gpt3__blog'>
                <img src={blog3} alt='blog'/>
                <p>date:july 6,2024</p>
                <h2>GPT-3 open AI is the fututre</h2>
                <p>Let us explore how it is?</p>
              </div>
          </div>
          <div className='gpt3__blog-two-three'>
              <div className='gpt3__blog'>
                <img src={blog4} alt='blog'/>
                <p>date:july 6,2024</p>
                <h2>GPT-3 open AI is the fututre</h2>
                <p>Let us explore how it is?</p>
              </div>
              <div className='gpt3__blog'>
                <img src={blog5} alt='blog'/>
                <p>date:july 6,2024</p>
                <h2>GPT-3 open AI is the fututre</h2>
                <p>Let us explore how it is?</p>
              </div>
          </div>
          </div>
       </div>

      </div>
    </div>
  )
}

export default Blog
