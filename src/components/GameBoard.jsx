import React, { useState } from 'react';
import ActionBar from './ActionBar';
import DealerSection from './DealerSection';
import PlayerSection from './PlayerSection';
import '../styles/GameBoard.css';

// Couple of useful utility functions/API calls.
import { drawCardFromDeck } from '../utils/DeckOfCardsAPI';
import calculateCardPoints from '../utils/CalculateCardPoints';

// Consider using a GAME_STATE to keep track of where you are in the game.
// This can also help the components render accordingly (i.e disable/hide buttons if not playing, etc...)
export const GAME_STATE = {
  PLAYING: 'playing',
  PLAYER_WIN: 'Player Win',
  DEALER_WIN: 'Dealer Win'
}


const GameBoard = ({ deckData }) => {
  // A couple of states to keep track of the dealer/player's hands
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);

  // Also consider using a "game state" to keep track of win conditions, etc...
  const [gameState, setGameState] = useState(GAME_STATE.PLAYING)

  const onPlayerHit = async () => {
    // Do something when Player Hit is clicked.
  //  console.log(drawCardFromDeck(deckData.deck_id))
    // setPlayerHand(prevPlayerHand => prevPlayerHand + 1)
    // PlayerSection(drawCardFromDeck(deckData.deck_id))
    // console.log(deckData)
    drawCardFromDeck(deckData.deck_id) //draws a card using the random id
    .then(data => {
      let id = data.cards[0].code //gets id of drawn card
      console.log("data:", id);
      setPlayerHand([...playerHand, id]) //adds new id to array by making a copy of the current array
      //and adding the new id to it by using the spread operator. Then we set the main PlayerHand array to
      //the copy by using the useState function

      //checks for win
      let score = getCurrentVal(id);
      let points = calculateCardPoints(playerHand) + parseInt(score);
      console.log("player", points)
      if(points == 21){
        setGameState(GAME_STATE.PLAYER_WIN)
        console.log(gameState)
      }
      else if(points > 21){
        setGameState(GAME_STATE.DEALER_WIN)
        console.log("gamestate:",gameState)
  
      }
 

    })
    console.log(drawCardFromDeck(deckData.deck_id))

  }

  function getCurrentVal(id) { //HELPER FUNCTION TO GET VALUE OF DRAWN CARD
    let value = id.charAt(0)
    let score = 0;
    if(value == "A"){
      score = score + 11;
    }
    else if(value >=2 && value <= 10){
      score = score + parseInt(value);
    }
    else{
      score = score + 10;
    }
    return score;
  }

  

  const onDealerHit = async () => {

    // Do something when Dealer Hit is clicked.
    drawCardFromDeck(deckData.deck_id) //draws a card using the random id
    .then(data => {
      let id = data.cards[0].code //gets id of drawn card
      let score = getCurrentVal(id);
      // let value = id.charAt(0)
      // let score = 0;
      // if(value == "A"){
      //   score = score + 11;
      // }
      // else if(value >=2 && value <= 10){
      //   score = score + parseInt(value);
      // }
      // else{
      //   score = score + 10;
      // }
      console.log("value:", score)

      console.log("data:", id);
      setDealerHand([...dealerHand, id]) //adds new id to array by making a copy of the current array
      //and adding the new id to it by using the spread operator. Then we set the main PlayerHand array to
      //the copy by using the useState function

      //checks for win
 
      let points = calculateCardPoints(dealerHand) + parseInt(score);
      console.log("dealer", points)
      if(points == 21){
        setGameState(GAME_STATE.DEALER_WIN)
        console.log(gameState)
      }
      else if(points > 21){
        setGameState(GAME_STATE.PLAYER_WIN)
        console.log("gamestate:",gameState)
  
      }
    })
  
    // console.log(drawCardFromDeck(deckData.deck_id))
  }

  const resetGame = () => {
    document.location.reload();
    // Function to reset the Game when either player/dealer wins.
  }

  return (
    <div id='game-board'>
      <ActionBar
        onPlayerHit={onPlayerHit}
        onDealerHit={onDealerHit}
        onResetGame={resetGame}
        gameState={gameState}
      />
      <DealerSection dealerHand={dealerHand} score = {calculateCardPoints(dealerHand)}/>
      <PlayerSection playerHand={playerHand} score = {calculateCardPoints(playerHand)}/>
    </div>
  );
};

export default GameBoard;