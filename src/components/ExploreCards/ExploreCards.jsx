import React from 'react';
import PropTypes from 'prop-types';
import './ExploreCards.css';

export const ExploreCards = ({ exploreContent }) => {
  const [firstCard, secondCard, thirdCard, fourthCard, fivesCard] = exploreContent;

  return (
    <div className="explore__main-images images">
      <div 
        className="images__image first"
        style={{
          backgroundImage: `url(${firstCard.imgPath})`
        }}
      >
        <div className="images__image-description">
          <h3 className='images__image-title'>{firstCard.title}</h3>
          <p className='images__image-country'>{firstCard.country}</p>
          <p className='images__image-text'>{firstCard.text}</p>
        </div>
      </div>
      <div 
        className="images__image second"
        style={{
          backgroundImage: `url(${secondCard.imgPath})`
        }}
      >
        <div className="images__image-description">
          <h3 className='images__image-title'>{secondCard.title}</h3>
          <p className='images__image-country'>{secondCard.country}</p>
          <p className='images__image-text'>{secondCard.text}</p>
        </div>
      </div>
      <div 
        className="images__image third"
        style={{
          backgroundImage: `url(${thirdCard.imgPath})`
        }}
      >
        <div className="images__image-description">
          <h3 className='images__image-title'>{thirdCard.title}</h3>
          <p className='images__image-country'>{thirdCard.country}</p>
          <p className='images__image-text'>{thirdCard.text}</p>
        </div>
      </div>
      <div 
        className="images__image fourth"
        style={{
          backgroundImage: `url(${fourthCard.imgPath})`
        }}
      >
        <div className="images__image-description">
          <h3 className='images__image-title'>{fourthCard.title}</h3>
          <p className='images__image-country'>{fourthCard.country}</p>
          <p className='images__image-text'>{fourthCard.text}</p>
        </div>
      </div>
      <div 
        className="images__image fives"
        style={{
          backgroundImage: `url(${fivesCard.imgPath})`
        }}
      >
        <div className="images__image-description">
          <h3 className='images__image-title'>{fivesCard.title}</h3>
          <p className='images__image-country'>{fivesCard.country}</p>
          <p className='images__image-text'>{fivesCard.text}</p>
        </div>
      </div>
    </div>
  );
};

ExploreCards.propTypes = {
  exploreContent: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      imgPath: PropTypes.string.isRequired,
    })
  ).isRequired,
};
