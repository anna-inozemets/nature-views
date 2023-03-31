import React from 'react';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <section className='section__header header'>
        <nav className='header__nav'>
          <div className="header__nav-logo">
            <p className="header__nav-logo-text">
              trppd __
            </p>
          </div>
          <ul className='header__nav-list'>
            <li className='header__nav-item'>
              <a href="#" className='header__nav-link'>Home</a>
            </li>
            <li className='header__nav-item'>
              <a href="#" className='header__nav-link'>Recommendation</a>
            </li>
            <li className='header__nav-item'>
              <a href="#" className='header__nav-link'>Explore</a>
            </li>
            <li className='header__nav-item'>
              <a href="#" className='header__nav-link'>Help</a>
            </li>
            <li className='header__nav-item'>
              <a href="#" className='header__nav-link'>About us</a>
            </li>
          </ul>
        </nav>
        <article className='header__content'>
          <div className="header__content-description">
            <h1 className='header__content-title'>
              The Walchen Lake
            </h1>
            <p className='header__content-text'>
              Walchensee or Lake Walchen is one of the deepest and largest alpine lakes in Germany, 
              and one of the best outdoors place, that you never imagine before.
            </p>
            <button className='header__content-btn' type='button'>
              Read more
            </button>
          </div>

          <div className="header__content-nav">
            <button className='header__content-nav-prev header__content-nav-btn'>
              &lt;
            </button>
            <button className='header__content-nav-next header__content-nav-btn'>
              &gt;
            </button>
            <p className='header__content-nav-text'>Outdoors Edition</p>
            <div className="header__content-nav-decoration"></div>
            <p className='header__content-nav-text'>1/8</p>
            <div className="header__content-nav-decoration small"></div>
          </div>
        </article>
      </section>
    </header>
  );
};