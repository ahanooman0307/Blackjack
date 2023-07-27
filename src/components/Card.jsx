import React from 'react';

const Card = (props) => {
  const id = props.cardId ? props.cardId : 'AS';

  return (
    <img
      src={`https://deckofcardsapi.com/static/img/${id}.png`}
    />
  )
};

export default Card;