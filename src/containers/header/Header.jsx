import React from 'react';
import './header.css'

import ai from '../../assets/ai.png'
import people from '../../assets/people.png'
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__hero">

          <div className="header_hero-text ">
            <h2 className='gradient__text'>Let’s Build Something
              amazing with GPT-3
              OpenAI
            </h2>
            <p>Yet bed any for travelling assistance indulgence unpleasing.<br/>
              Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          </div>

          <div className="header__email">
            <input type="email" placeholder='Your Email Address '/>
            <button className="email__button">Get Started</button>
          </div>

          <div className="header__people">
            <img src={people} alt="" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>

        </div>
        <div className="header__img">
          
          <img src={ai} alt="AI image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
