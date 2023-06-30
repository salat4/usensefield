import React from 'react';
import s from './Strength.module.css';

function Strength({ color }) {
  const greenField = {
    backgroundColor: color === 'green' ? 'green' : 'grey'
  };
  const yellowField = {
    backgroundColor: color === 'yellow' ? 'yellow' : 'grey'
  };
  const redField = {
    backgroundColor: color === 'red' ? 'red' : 'grey'
  };

  return (
    <div className={s.box}>
      <div className={s.field} style={greenField}></div>
      <div className={s.field} style={yellowField}></div>
      <div className={s.field} style={redField}></div>
    </div>
  );
}

export default Strength;
