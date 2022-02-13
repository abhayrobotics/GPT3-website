import React, { useState } from 'react';
import './navbar.css'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Menu = () => (
  <>
    <p><a href="#home" >Home</a></p>
    <p><a href="#wgpt3" >What is GPT ? </a></p>
    <p><a href="#possibility" >Open AI</a></p>
    <p><a href="#blog" >Case Studies</a></p>
    <p><a href="#blog" >Library</a></p>
  </>
)

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt__navbar">
      <div className="gpt3__navbar-links">

        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
        <div className="gpt3__navbar-sign">
          <div className='gpt3__sign-in'>Sign In</div>
          <button className='gpt3__signup'>Sign Up</button>
        </div>
        <div className="gpt3__navbar-menu">

          {/* comment:  statement? true condition statement : condition false statement */}
          {toggleMenu
            ? <RiCloseLine color='#FFF' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#FFF' size={27} onClick={() => setToggleMenu(true)} />
          }

          {/* Comment : st1 && (st2)  this implies that if st1 is true show st2 and if false skip it*/}
          {toggleMenu && (
            <div className='scale-up-center'>
              <div className="gpt3__navbar-mobilemenu ">
                <Menu />
                <div className="gpt3__sign-mobile">
                  <p>Sign In</p>
                  <button className='gpt3__signup'>Sign Up</button>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </div>

  );
};

export default Navbar;
