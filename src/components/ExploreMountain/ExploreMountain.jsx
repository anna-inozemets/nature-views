import React from 'react';
import './ExploreMountain.css';
import { ExploreMountainCard } from '../ExploreMountainCard';

export const ExploreMountain = () => {
  return (
    <section className='section__explore-mountain'>
      <div className="explore-mountain">
        <h2 className='explore-mountain-title'>
          Mountain Collections
        </h2>
        <p className='explore-mountain-description'>
        Discover the world&apos;s most breathtaking peaks with our best mountain collections. 
        Whether you&apos;re an avid hiker or just love the beauty of nature, you&apos;ll be captivated 
        by the towering cliffs, sweeping vistas, and rugged beauty of our collection. Come explore with us today!
        </p>
        <ExploreMountainCard />
        <ExploreMountainCard />
        <ExploreMountainCard />
      </div>
    </section>
  );
};