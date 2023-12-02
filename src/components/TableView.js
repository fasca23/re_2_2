import React from 'react';
import PropTypes from 'prop-types';
import ShopItem from './StrTable';

function ListView({items}) {
  return (
    <div className="list-content">
      <ul>
        {items.map((item, index) => <li key={index}><ShopItem name={item.name} price={item.price} color={item.color} img={item.img}/></li>)}
      </ul>
    </div>
  );
}

ListView.propTypes = {
    items: PropTypes.array.isRequired,
}
  
export default ListView;