// Given an array of card IDs (AH, 6C, 3S, etc...)
// Calculate the score for blackjack.
// NOTE: For simplicity sake, treat all A's as 11
const calculateCardPoints = (cards) => {

  let length = cards.length;
  let score = 0;
  for(let i = 0; i < length; i++){
    let cardValue = cards[i].charAt(0)
    if(cardValue == "A"){
      score = score + 11;
    }
    else if(cardValue >=2 && cardValue <= 10){
      score = score + parseInt(cardValue);
    }
    else{
      score = score + 10;
    }
   
  }
  console.log(cards);
  return score;

  // TODO: Write a function that will calculate the score for you.
}

export default calculateCardPoints;