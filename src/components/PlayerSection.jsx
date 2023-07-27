import React from 'react';
import '../styles/PlayerSection.css';
import Card from './Card';

const PlayerSection = (props) => {
  return (
    <div id='player-section'>
      {props.playerHand.map(c => {
        return (
          <Card cardId={c}/>
        )
      })}
      <h1>{props.score}</h1>
    </div>
  )
};

export default PlayerSection;
