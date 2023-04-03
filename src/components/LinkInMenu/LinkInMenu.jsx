import React from 'react';
import PropTypes from 'prop-types';
import './LinkInMenu.css';

export const LinkInMenu = ({ text, handleClick}) => (
  <a 
    href={`#${text.toLowerCase().split(' ')[0]}`}
    className='header__nav-link'
    onClick={handleClick}
  >
    {text}
  </a>
);

LinkInMenu.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
