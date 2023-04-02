import React, { useState } from 'react';
import './Header.css';
import { headerContent } from '../../api/headerContent';



export const Header = () => {
  const [lake, setLake] = useState(headerContent[0]);
  const [currentLakeIndex, setCurrentLakeIndex] = useState(0);

  const handleClickPrev = () => {
    setCurrentLakeIndex((prevIndex) => (
      prevIndex = prevIndex - 1
    ));
    setLake(headerContent[currentLakeIndex - 1]);
  };

  const handleClickNext = () => {
    setCurrentLakeIndex((prevIndex) => (
      prevIndex = prevIndex + 1
    ));
    setLake(headerContent[currentLakeIndex + 1]);
  };

  const isPrevBtnDisabled = currentLakeIndex === 0;
  const isNextButtonDisabled = currentLakeIndex === headerContent.length - 1;

  return (
    <header>
      <section id="home" className='section__header header'>
        <nav className='header__nav'>
          <div className="header__nav-logo">
            <p className="header__nav-logo-text">
              trppd __
            </p>
          </div>
          <input type="checkbox" id="burger-menu" className='header__nav-open-menu' />
          <label htmlFor="burger-menu" id="burger-icon" className='header__nav-burger-icon'>
            <span className="header__nav-line"></span>
            <span className="header__nav-line"></span>
            <span className="header__nav-line"></span>
          </label>
          <ul className='header__nav-list'>
            <li className='header__nav-item'>
              <a href="#" className='header__nav-link'>Home</a>
            </li>
            <li className='header__nav-item'>
              <a href="#recommendation" className='header__nav-link'>Recommendation</a>
            </li>
            <li className='header__nav-item'>
              <a href="#explore" className='header__nav-link'>Explore</a>
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
              {lake.title}
            </h1>
            <p className='header__content-text'>
              {lake.description}
            </p>
            <button className='header__content-btn' type='button'>
              Read more
            </button>
          </div>

          <div className="header__content-nav">
            <button 
              className='header__content-nav-prev header__content-nav-btn'
              onClick={handleClickPrev}
              disabled={isPrevBtnDisabled}
            >
              &lt;
            </button>
            <button 
              className='header__content-nav-next header__content-nav-btn'
              onClick={handleClickNext}
              disabled={isNextButtonDisabled}
            >
              &gt;
            </button>
            <p className='header__content-nav-text'>Outdoors Edition</p>
            <div className="header__content-nav-decoration"></div>
            <p className='header__content-nav-text'>{currentLakeIndex + 1}/{headerContent.length}</p>
            <div className="header__content-nav-decoration small"></div>
          </div>
        </article>
      </section>
    </header>
  );
};
