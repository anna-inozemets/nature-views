import React from 'react';
import './Footer.css';
import instagram from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';

export const Footer = () => {
  return (
    <footer>
      <section className='section__footer footer'>
        <p className="footer__logo">
          trppd __
        </p>
        <p className='footer__rights'>
          &copy; 2017-2018
        </p>
        <div className="fotter__contacts">
          <img 
            className='footer__icon' 
            src={instagram}
            alt="instagram" 
          />
          <img 
            className='footer__icon' 
            src={twitter}
            alt="twitter" 
          />
          <img 
            className='footer__icon' 
            src={facebook} 
            alt="facebook" 
          />
        </div>
      </section>
    </footer>
  );
};
