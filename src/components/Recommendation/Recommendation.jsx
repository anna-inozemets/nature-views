import React from 'react';
import './Recommendation.css';
import { RecommendationCard } from '../RecommndationCard';
import { recommendationContent } from '../../api/recommendationContent';

export const Recommendation = () => {
  return (
    <section id="recommendation" className='section__recommed recommend'>
      <div className="recommend__description">
        <h2 className='reccomend__description-title'>Featured Spots</h2>
        <p className='reccomend__description-text'>
          Some featured spots that you might want visit before you die
        </p>
        <a href="#" className='reccomend__description-link'>View all</a>
      </div>
      <div className="recommend__cards-wrapper">
        <div className="recommend__cards">
          {recommendationContent.map(card => (
            <RecommendationCard key={card.id} card={card} />
          ))}
        </div>
        <div className="recommend__info">
          <p className='recommend__info-text'>Outdoors Edition</p>
          <div className="recommend__info-decoration"></div>
          <p className='recommend__info-text'>1/{recommendationContent.length}</p>
          <div className="recommend__info-decoration small"></div>
        </div>
      </div>
    </section>
  );
};
