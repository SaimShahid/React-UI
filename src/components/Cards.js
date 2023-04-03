import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>We can design responsive websites for you!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/images/Electricity.jpg'
              text='Offering you a fully responsive website for an electrision'
              label='Electrision $99.00'
              path='/services'
            />
            <CardItem
              src='/images/gym.jpg'
              text='Application for GYM. Show your services and packages to the world'
              label='Wellness Center $99.00'
              path='/services'
            />
          </ul>
          <hr/>
          <h1>Discount Pannel</h1>
          <hr/>
          <br/>
          <ul className='cards__items'>
            <CardItem
              src='/images/barber.jpg'
              text='Super discount for salon websites'
              label='Salon $59.00'
              path='/services'
            />
            <CardItem
              src='/images/Electricity2.jpg'
              text='Take advantage of our exclusive discount on electricity website'
              label='Electrision $39.00'
              path='/products'
            />
            <CardItem
              src='/images/plumber.jpg'
              text='Do not miss out on this amazing discount for plumbing services'
              label='Plumber $39.00'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;