import React from 'react';
import './ExploreSea.css';

export const ExploreSea = () => {
  return (
    <section id="explore" className='section__explore-sea explore-sea'>
      <div className="explore-sea__wrapper">
        <img 
          className='explore-sea__img' 
          src='/images/sea.jpg'
          alt="sea" 
        />
        <article className='explore-sea__info'>
          <h2 className='explore-sea__title'>Above <br /> the Sea</h2>
          <p className='explore-sea__subtitle'>
            <em>
              &quot; The sea, once it casts its spell, holds one in its net of wonder forever. &quot;
            </em>
          </p>
          <p className='explore-sea__text'>
            The sea is a stunningly beautiful natural wonder that never fails to captivate our 
            hearts and minds. Its vast expanse of shimmering blue waters, which seem to stretch out 
            into infinity, is a breathtaking sight that is both calming and awe-inspiring.
          </p>
          <p className='explore-sea__text'>
            The sea&apos;s beauty lies not only in its endless horizons but also in its ever-changing moods. 
            One moment it can be tranquil and serene, with gentle waves lapping at the shore, while the next 
            it can be fierce and tumultuous, with towering waves crashing against cliffs and rocks.
          </p>
          <a className='explore-sea__btn' href="#">Read more</a>
        </article>
      </div>

    </section>
  );
};