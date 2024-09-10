import React from "react";
import Card from "./Card";

const CardGrid = ({ cards, handleCardClick }) => {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={handleCardClick} />
      ))}
    </div>
  );
};

export default CardGrid;
