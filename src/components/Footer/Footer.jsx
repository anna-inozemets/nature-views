/* eslint-disable no-undef */
import React from 'react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
      <section id="about" className="section__footer footer">
        <a href="#" className="footer__logo">
          trppd __
        </a>
        <p className="footer__rights">
          &copy; 2017-2018
        </p>
        <div className="footer__contacts">
          <a 
            href="https://www.instagram.com"
            className="footer__contacts-link"
            target="blank"
          >
            <img 
              className="footer__icon"
              src={`${process.env.PUBLIC_URL}/images/instagram.svg`}
              alt="instagram" 
            />
          </a>
          <a 
            href="https://twitter.com" 
            className="footer__contacts-link"
            target="blank"
          >
            <img 
              className="footer__icon"
              src={`${process.env.PUBLIC_URL}/images/twitter.svg`}
              alt="twitter" 
            />
          </a>
          <a 
            href="https://www.facebook.com"
            className="footer__contacts-link"
            target="blank"
          >
            <img 
              className="footer__icon"
              src={`${process.env.PUBLIC_URL}/images/facebook.svg`}
              alt="facebook" 
            />
          </a>
        </div>
      </section>
    </footer>
  );
};
