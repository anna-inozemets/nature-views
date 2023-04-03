import React from 'react';
import './Help.css';

export const Help = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <section 
      id="help"
      className="section__help help"
      style={{
        backgroundImage: 'url("/images/map.svg")'
      }}
    >
      <p className="help__subtitle">
        Subscribe to our new letters
      </p>
      <form className="help__action" onSubmit={(event) => handleSubmit(event)}>
        <input 
          type="email"
          placeholder="Your email"
          className="help__input"
        />
        <button type="submit" className="help__btn">
          Subscribe
        </button>
      </form>
    </section>
  );
};
