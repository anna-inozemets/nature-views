import React from 'react';
import './ExploreMountainCard.css';
import mountainExploreImg from '../../images/mountain-explore.jpg';

export const ExploreMountainCard = () => {
  return (
    <article className='mountain-card'>
      <div className="mountain-card__description">
        <h4 className='mountain-card__description-title'>
          Southern Mountain 
        </h4>
        <p className='mountain-card__description-country'>
          South Country
        </p>
        <p className='mountain-card__description-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ad dignissimos perferendis quos 
          debitis at eveniet delectus, laudantium accusamus saepe et a id minus temporibus officiis rem, 
          cumque consequuntur! Quia! Quos nostrum perferendis cumque laudantium tempora dicta officia asperiores, 
          facilis illum? Voluptatibus enim dolorum quam, deleniti repudiandae ad.
        </p>
        <p className='mountain-card__description-text mountain-card__description-text-part'>
          Repellendus, a magnam rerum consectetur consequuntur, omnis sapiente velit repellat suscipit 
          architecto voluptatem eos deserunt asperiores quod cupiditate.
          Perspiciatis error suscipit debitis sequi laudantium sint quo maiores nam reiciendis nulla animi.
        </p>
        <a href="#" className="mountain-card__description-link">
          Read more
        </a>
      </div>
      <img 
        className="mountain-card__img" 
        src={mountainExploreImg}
        alt="mountain"
      />
    </article>
  );
};
