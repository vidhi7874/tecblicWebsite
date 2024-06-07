import React from 'react';
import '../../../app/switchToggler.css';

const SwitchToggler = ({ id, dataOn, dataOff, isChecked, onChange }) => {
  return (
    <div className="btn-container">
      <label className="switch btn-color-mode-switch">
        <input type="checkbox" id={id} checked={isChecked} onChange={onChange} />
        <label htmlFor={id} data-on={dataOn} data-off={dataOff} className="btn-color-mode-switch-inner"></label>
      </label>
    </div>
  );
};

export default SwitchToggler;
