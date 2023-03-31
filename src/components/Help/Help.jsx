import React from 'react';
import './Help.css';

export const Help = () => {
  return (
    <section className='section__help help'>
      <p className='help__subtitle'>
        Subscribe to our new letters
      </p>
      <form action="mailto:trppd@gmail.com" className='help__action'>
        <input 
          type="email"
          placeholder='Your email'
          className='help__input'
        />
        <button type='submit' className='help__btn'>
          Subscribe
        </button>
      </form>
    </section>
  );
};
