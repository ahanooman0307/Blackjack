import React from 'react';

const ActionButton = (props) => {
  let vis = "visible";
  if(props.gameState == "playing"){
    vis = "visible";
  }
  else if(props.gameState == "Player Win"){
    vis = "hidden";
  }
  else if(props.gameState == "Dealer Win"){
    vis = "hidden";
  }
  return (
    <button style = {{visibility: vis}} className='action-btn' onClick={props.onClick}>
      {props.label}
    </button>
  )
}

export default ActionButton;