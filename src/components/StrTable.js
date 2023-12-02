import React from 'react';
import PropTypes from 'prop-types';

function ShopItem({name, price, color, img}) {
  return (
    <div className="list-item-content" >
      <div className="item-img"><img className="image-list" src={img} alt=""></img></div>
      <div className="item-title">{name}</div>
      <div className="item-color">{color}</div>
      <div className="item-price">${price}</div>
      <button className="item-btn" type="button">Добавить в корзину</button>
    </div>
  );
}

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}
  
export default ShopItem;