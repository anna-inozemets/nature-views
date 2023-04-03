import React, { useState, useEffect } from 'react';
import './Header.css';
import { headerContent } from '../../api/headerContent';
import { LinkInMenu } from '../LinkInMenu';

const menuLinkTitles = ['Home', 'Recommendation', 'Explore', 'Help', 'About us'];

export const Header = () => {
  const [lake, setLake] = useState(headerContent[0]);
  const [currentLakeIndex, setCurrentLakeIndex] = useState(0);
  const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState(false);

  const handleTogleMenu = () => {
    setIsOpenBurgerMenu(!isOpenBurgerMenu);
  };

  const handleLinkClick = () => {
    setIsOpenBurgerMenu(false);
  };

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

  useEffect(() => {
    if (isOpenBurgerMenu) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpenBurgerMenu]);

  const isPrevBtnDisabled = currentLakeIndex === 0;
  const isNextButtonDisabled = currentLakeIndex === headerContent.length - 1;

  return (
    <header>
      <section 
        id="home" 
        className="section__header header"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent, rgba(40, 39, 42, 1)), url(${lake.imgPath})`
        }}
      >
        <div className="header__contacts">
          <a href="#explore" className="header__contacts-link header__contacts-link-collection">
            My Collection
          </a>
          <a href="#" className="header__contacts-link">
            Galih Pambudi
          </a>
        </div>
        <nav className="header__nav">
          <div className="header__nav-logo">
            <a href='#' className="header__nav-logo-text">
              trppd __
            </a>
          </div>
          <input 
            type="checkbox"
            id="burger-menu"
            className="header__nav-open-menu"
            checked={isOpenBurgerMenu}
            onChange={handleTogleMenu}
          />
          <label htmlFor="burger-menu" id="burger-icon" className="header__nav-burger-icon">
            <span className="header__nav-line"></span>
            <span className="header__nav-line"></span>
            <span className="header__nav-line"></span>
          </label>
          <ul className="header__nav-list">
            {menuLinkTitles.map(title => (
              <li key={title} className="header__nav-item">
                <LinkInMenu text={title} handleClick={handleLinkClick} />
              </li>
            ))}
          </ul>
        </nav>
        <article className="header__content">
          <div className="header__content-description">
            <h1 className="header__content-title">
              {lake.title}
            </h1>
            <p className="header__content-text">
              {lake.description}
            </p>
            <a href="#" className="header__content-btn" type="button">
              Read more
            </a>
          </div>

          <div className="header__content-nav">
            <button 
              className="header__content-nav-prev header__content-nav-btn"
              onClick={handleClickPrev}
              disabled={isPrevBtnDisabled}
            >
              &lt;
            </button>
            <button 
              className="header__content-nav-next header__content-nav-btn"
              onClick={handleClickNext}
              disabled={isNextButtonDisabled}
            >
              &gt;
            </button>
            <p className="header__content-nav-text">Outdoors Edition</p>
            <div className="header__content-nav-decoration"></div>
            <p className="header__content-nav-text">{currentLakeIndex + 1}/{headerContent.length}</p>
            <div className="header__content-nav-decoration small"></div>
          </div>
        </article>
      </section>
    </header>
  );
};
