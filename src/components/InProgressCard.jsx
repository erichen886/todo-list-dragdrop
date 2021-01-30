import React from 'react';

const InProgressCard = ({ cardId, cards }) => {
  const { title, description } = cards.entities[cardId];
  return (
    <div className="in-progress-card" draggable="true">
      <div className="in-progress-card-title">{title}</div>
      <div className="in-progress-card-description">{description}</div>
    </div>
  );
}

export default InProgressCard;
