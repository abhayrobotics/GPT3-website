import React from 'react';
import './whatGPT3.css'

import possibiltyimg  from '../../assets/possibility.png';
const WhatGPT3 = () => {
  return (
      <div>
         <div className="wgpt3__context">

           <div className="wgpt3__img">
             <img src={possibiltyimg} alt="image" />

           </div>
          
          <div className="wgpt3__text">
            <h3>Request Early Access to Get Started</h3>
            <h2 className='gradient__text--small'>The possibilities are<br /> beyond your imagination</h2>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          </div>

         </div>
      </div>
  );
};

export default WhatGPT3;
