import React from 'react';
import Die from './Die';

import './Dice.scss';

function Dice({ dice, handleClick, locked, disabled, rolling }) {
  return (
    <div className='Dice'>
      {dice.map((d, idx) => (
        <Die
          handleClick={handleClick}
          val={d}
          locked={locked[idx]}
          idx={idx}
          key={idx}
          disabled={disabled}
          rolling={rolling && !locked[idx]}
        />
      ))}
    </div>
  );
}

export default Dice;
