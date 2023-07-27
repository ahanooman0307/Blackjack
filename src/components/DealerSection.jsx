import React from 'react';
import '../styles/DealerSection.css';
import Card from './Card';

const DealerSection = (props) => {
  return (
    <div id='dealer-section'>
      {props.dealerHand.map(c => {
        return (
          <Card cardId={c}/>
        )
      })}
      <h1>{props.score}</h1>
    </div>
  )
}

export default DealerSection;