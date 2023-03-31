import React from 'react';
import './RecommendationCard.css';
import cardImage from '../../images/recommendCard1.jpg';

export const RecommendationCard = () => {
  return (
    <div className="card">
      <img className='card__img' src={cardImage} alt="card1" />
      <h3 className='card__title'>Lake Louise</h3>
      <h4 className='card__country'>Canada</h4>
      <p className='card__description'>
        It is a glacial lake surrounded by the towering peaks of the Canadian Rockies 
        and is known for its turquoise blue color.
      </p>
      <a className='card__link' href="#">read more</a>
    </div>
  );
};
