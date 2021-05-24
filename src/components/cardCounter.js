import React, { useState, useEffect } from "react";

const CardCounter = (props) => {
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    if (props.clickedCards.length > bestScore) {
      setBestScore(props.clickedCards.length);
    }
  }, [bestScore, props.clickedCards.length]);

  return (
    <div className="counter">
      <div>Score: {props.clickedCards.length}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  );
};

export default CardCounter;
