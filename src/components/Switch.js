import React from 'react';
import PropTypes from 'prop-types';

function Switch({icon, onSwitch}) {
  return (
    <div className='top'>
      <button className="switch-btn material-icons" onClick={onSwitch} type="button">{icon}</button>
    </div>
  );
}

Switch.propTypes = {
  icon: PropTypes.string.isRequired,
  onSwitch: PropTypes.func.isRequired,
}
  
export default Switch;