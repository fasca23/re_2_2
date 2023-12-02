import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Switch from './Switch';
import CardsView from './CardsView';
import ListView from './TableView';

function Store({products}) {
  const [view, setView] = useState('view_module');

  function changeView() {
    if (view === 'view_module') {
      return setView('view_list');
    } else {
      return setView('view_module');
    }
  }

  return (
    <div className="main-content">
      <Switch icon={view} onSwitch={() => changeView()}/>
      {view === 'view_module' ? <CardsView cards={products}/> : <ListView items={products}/>}
    </div>
  );
}

Store.propTypes = {
    products: PropTypes.array.isRequired,
}
  
export default Store;