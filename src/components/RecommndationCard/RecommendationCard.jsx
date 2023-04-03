import React from 'react';
import PropTypes from 'prop-types';
import './RecommendationCard.css';

export const RecommendationCard = ({ card }) => {
  const {title, country, description, imgPath } = card;

  return (
    <div className="card">
      <img className="card__img" src={imgPath} alt="card1" />
      <h3 className="card__title">{title}</h3>
      <h4 className="card__country">{country}</h4>
      <p className="card__description">{description}</p>
      <a className="card__link" href="#">read more</a>
    </div>
  );
};

RecommendationCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgPath: PropTypes.string.isRequired,
  }),
};
