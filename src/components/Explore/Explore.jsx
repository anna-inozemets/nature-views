import React from 'react';
import './Explore.css';

export const Explore = () => {
  return (
    <section className='section__explore explore'>
      <div className="container explore">
        <div className="explore__description">
          <h2 className='explore__description-title'>Editor&apos;s <br /> Pick</h2>
          <p className='explore__description-text'>
            Our picks, just for your inspire and fascinating mood!
          </p>
        </div>
        <div className="explore__main">
          <div className="explore__main-nav">
            <button className='explore__main-nav-prev explore__main-nav-btn'>
              &lt;
            </button>
            <button className='explore__main-next explore__main-nav-btn'>
              &gt;
            </button>
            <p className='explore__main-nav-text'>Outdoors Edition</p>
            <div className="explore__main-nav-decoration"></div>
            <p className='explore__main-nav-text'>1/1</p>
            <div className="explore__main-nav-decoration small"></div>
            <select name="sortBy" className='explore__main-nav-select'>
              <option value="Sort by" defaultChecked className='explore__main-nav-option'>Sort By</option>
              <option value="Country" className='explore__main-nav-option'>Country (A-B)</option>
              <option value="Title" className='explore__main-nav-option'>Title (A-B)</option>
            </select>
            <div className="explore__main-nav-decoration small"></div>
          </div>
          <div className="explore__main-images images">
            <div className="images__first">
              <div className="images__first-description">
                <h3 className='images__first-title'>Flatiron</h3>
                <p className='images__first-country'>USA</p>
                <p className='images__first-text'>
                  Just description of smth to create a style for this block as I really need it
                </p>
              </div>
            </div>
            <div className="images__second"></div>
            <div className="images__third"></div>
            <div className="images__fourth"></div>
            <div className="images__fives"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

