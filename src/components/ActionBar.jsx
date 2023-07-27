import React from 'react';
import '../styles/ActionBar.css'
import ActionButton from './ActionButton';

const WinnerAnnouncement = (props) => {
  let vis = "hidden";
  if(props.gameState == "playing"){
    vis = "hidden";
  }
  else if(props.gameState == "Player Win"){
    vis = "visible";
  }
  else if(props.gameState == "Dealer Win"){
    vis = "visible";
  }
  return (
    <button style={{visibility: vis}}className='action-btn' onClick={props.resetGame}>{props.gameState}!</button>
  )
}

const ActionBar = (props) => {
  return (
    <div id='action-bar'>
      <ActionButton label='Dealer Hit' gameState={props.gameState} onClick={props.onDealerHit}/>
      <WinnerAnnouncement gameState={props.gameState} resetGame={props.onResetGame}/>
      <ActionButton label='Player Hit' gameState={props.gameState} onClick={props.onPlayerHit}/>
    </div>
  )
};

export default ActionBar;