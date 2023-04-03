import React, { useMemo, useState } from 'react';
import './Explore.css';
import { ExploreCards } from '../ExploreCards';
import { exploreContent } from '../../api/exploreContent';
import { getSortedContent } from '../../utils/getSortedContent';

export const Explore = () => {
  const [sortBy, setSortBy] = useState('Nothing');

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const sortedContent = useMemo(() => {
    return getSortedContent(exploreContent, sortBy);
  }, [sortBy]);

  return (
    <section className='section__explore explore'>
      <div className="explore">
        <div className="explore__description">
          <h2 className='explore__description-title'>Editor&apos;s <br /> Pick</h2>
          <p className='explore__description-text'>
            Our picks, just for your inspire and fascinating mood!
          </p>
        </div>
        <div className="explore__main">
          <div className="explore__main-nav">
            <button 
              className='explore__main-nav-prev explore__main-nav-btn'
              disabled={true}
            >
              &lt;
            </button>
            <button 
              className='explore__main-next explore__main-nav-btn'
              disabled={true}
            >
              &gt;
            </button>
            <p className='explore__main-nav-text'>Outdoors Edition</p>
            <div className="explore__main-nav-decoration"></div>
            <p className='explore__main-nav-text'>1/1</p>
            <div className="explore__main-nav-decoration small"></div>
            <select 
              name="sortBy" 
              className='explore__main-nav-select'
              onChange={(event) => handleSortByChange(event)}
            >
              <option value="Nothing" defaultChecked className='explore__main-nav-option'>Sort By</option>
              <option value="Country" className='explore__main-nav-option'>Country (A-B)</option>
              <option value="Title" className='explore__main-nav-option'>Title (A-B)</option>
            </select>
            <div className="explore__main-nav-decoration small"></div>
          </div>
          <ExploreCards exploreContent={sortedContent} />
        </div>
      </div>
    </section>
  );
};

