// App.js
import React from 'react';
import {Article,Brand,CTA,Footer,Navbar} from './components';
import {Blog,Header,Possibility,Features,WhatGPT3} from './container';
import './App.css';
function App() {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;
