export const getNewBlackjackDeck = () => {
  return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=3')
    .then(res => res.json())
    .then(data => data);
}

export const drawCardFromDeck = (deckId, drawCount=1) => {
  if (!deckId) {
    // If no deck ID, can't make any API calls.
    return;
  }

  return fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${drawCount}`)
    .then(res => res.json())
    .then(data => data);
}