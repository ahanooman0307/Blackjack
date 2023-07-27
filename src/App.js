import React, { useEffect, useState } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import { getNewBlackjackDeck } from './utils/DeckOfCardsAPI';

function App() {
  const [deckData, setDeckData] = useState(undefined);

  // This is a useEffect hook, which will run whenever the component is mounted!
  useEffect( () => {
    if (!deckData) {
      getNewBlackjackDeck()
        .then(data => {
          setDeckData(data);
          console.log(data);
        })
    }
  }, [])

  return (
    <div className="App">
      <GameBoard deckData={deckData}/>
    </div>
  );
}

export default App;
