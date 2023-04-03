import React from 'react';
import PropTypes from 'prop-types';
import './ExploreMountainCard.css';

export const ExploreMountainCard = ({ card }) => {
  const { 
    title, 
    country, 
    descriptionFristPart,
    descriptionSecondPart,
    imgPath,
  } = card;

  return (
    <article className='mountain-card'>
      <div className="mountain-card__description">
        <h4 className='mountain-card__description-title'>
          {title}
        </h4>
        <p className='mountain-card__description-country'>
          {country}
        </p>
        <p className='mountain-card__description-text'>
          {descriptionFristPart}
        </p>
        <p className='mountain-card__description-text mountain-card__description-text-part'>
          {descriptionSecondPart}
        </p>
        <a href="#" className="mountain-card__description-link">
          Read more
        </a>
      </div>
      <img 
        className="mountain-card__img" 
        src={imgPath}
        alt="mountain"
      />
    </article>
  );
};

ExploreMountainCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    descriptionFristPart: PropTypes.string.isRequired,
    descriptionSecondPart: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
  })
};
