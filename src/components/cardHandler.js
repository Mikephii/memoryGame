import React, { useState, useEffect } from "react";
import Card from "./card";
import CardCounter from "./cardCounter";
import raize from "./Raize.png";
import occlura from "./Occlura.png";
import pewki from "./Pewki.png";
import hocus from "./Hocus.png";
import mushi from "./Mushi.png";
import ukama from "./Ukama.png";
import blooze from "./Blooze.png";
import ganki from "./ganki.png";
import tateru from "./Tateru.png";
import fomu from "./Fomu.png";
import skail from "./Skail.png";
import ob1 from "./0b1.png";
const CardHandler = (props) => {
  const [cardNumber, setCardNumber] = useState(props.cardNumber);
  const [clickedCards, setClickedCards] = useState([]);
  const [imageArray, setImageArray] = useState(0);
  const [cards, setCards] = useState([makeCards()]);

  useEffect(() => {
    setImageArray([
      raize,
      occlura,
      pewki,
      hocus,
      mushi,
      ukama,
      blooze,
      ganki,
      tateru,
      fomu,
      skail,
      ob1,
    ]);
  }, []);

  function makeCards() {
    let cards = [];
    var i;
    for (i = 0; i < cardNumber; i++) {
      cards = [
        ...cards,
        <Card
          key={i}
          imageArray={imageArray}
          addCardToList={addCardToList}
          index={i}
        ></Card>,
      ];
    }
    var shuffledCards = shuffleArray(cards);
    return shuffledCards;
  }

  function addCardToList(cardIndex) {
    if (!clickedCards.includes(cardIndex)) {
      setClickedCards([...clickedCards, cardIndex]);
      console.log(clickedCards);
    } else {
      setClickedCards([]);
    }
  }

  //JavaScript implementation of the Durstenfeld shuffle, an optimized version of Fisher-Yates
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  return (
    <div>
      <div className="cardBox">{makeCards()}</div>
      <CardCounter clickedCards={clickedCards}></CardCounter>
    </div>
  );
};

export default CardHandler;
