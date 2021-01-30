import React from 'react';

const CompletedCard = ({ cardId, cards }) => {

  const { title, description } = cards.entities[cardId];
  return (
    <div className="completed-card" draggable="true">
      <div className="completed-card-title">{title}</div>
      <div className="completed-card-description">{description}</div>
    </div>
  );
}

export default CompletedCard;
