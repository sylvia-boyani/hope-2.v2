// CardItem.js
import React from 'react';
import './Slider.css';

const CardItem = ({ src, text }) => {
  return (
    <li className="c-item">
      <img src={src} alt="Card" className="c-img" />
      <div className="c-content">
      <p className="card-text">{text}</p>
      </div>
    </li>
  );
};

export default CardItem;
