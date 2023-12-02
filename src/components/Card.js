import React from 'react';
import PropTypes from 'prop-types';

function ShopCard({name, price, color, img}) {
  return (
    <div className="card-content">
      <div className="item-title">{name}</div>
      <div className="item-color">{color}</div>
      <div className="item-img"><img className="image" src={img} alt=""></img></div>
      <div className="price-btn">
        <div className="item-price">${price}</div>
        <button className="item-btn" type="button">Добавить в корзину</button>
      </div>
    </div>
  );
}

ShopCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
  
export default ShopCard;