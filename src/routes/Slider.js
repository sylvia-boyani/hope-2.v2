// ThreeCards.js
import React from 'react';
import './Slider.css';
import CardItem from './CardItem';
import card1 from '../assets/images/christmas-card.jpg'
import card2 from '../assets/images/lamu-mission.jpg'
import card3 from '../assets/images/Mens-Ministry.jpg'

const Slider = () => {
  return (
    <div className='cs'>
      <h1 className='kard-head'>Announcements</h1>
      <div className='c-container'>
        <ul className='c-items'>
          <CardItem
            src={card1}
            text='Christmas is here!'
            label='Card 1'
          />
          <CardItem
            src={card2}
            text='Lamu Youth Mission.'
            label='Card 2'
          />
          <CardItem
            src={card3}
            text='Mens Conference'
            label='Card 3'
          />
        </ul>
      </div>
    </div>
  );
};

export default Slider;
