import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [index, setIndex] = useState(props.index);
  const [color, setColor] = useState("black");

  function handleClick() {
    props.addCardToList(index);
  }

  return (
    <div onClick={handleClick} style={{ color: color }} className="card">
      <img className="cardImage" src={props.imageArray[index]} alt="" />
    </div>
  );
};

export default Card;
