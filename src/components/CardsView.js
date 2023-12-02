import React from 'react';
import PropTypes from 'prop-types';
import ShopCard from './Card';

function CardsView({cards}) {
  return (
    <div className="cards-content">
      {cards.map((item, index) => <div key={index}><ShopCard name={item.name} price={item.price} color={item.color} img={item.img}/></div>)}
    </div>
  );
}

CardsView.propTypes = {
    cards: PropTypes.array.isRequired,
}
  
export default CardsView;