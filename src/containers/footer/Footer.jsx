import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer">

        <div className="footer__heading">
          <h2 className='gradient__text--small'>Do you want to step in to the<br />
            future before others</h2>
        </div>

        <div className="request__button">Request Early Access</div>

        <div className="footer__links">

          <div className="link__icon">
            <h2>GPT-3</h2>
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>

          <div className="link__category">
            <h3>Links</h3>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counter</p>
            <p>Contact</p>
          </div>

          <div className="link__category">
            <h3>Company</h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>

          <div className="link__category">
            <h3>Get in Touch</h3>
            <p>Crechterwoord K12 182 DK Alknjkcb</p>
            <p>085-132567</p>
            <p>info@payme.net</p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Footer;
