import React from 'react';

const TaskCard = ({ cardId, cards }) => {
 const { title, description } = cards.entities[cardId];
  return (
    <div className ="task-card" draggable="true">
      <div className="task-card-title">{title}</div>
      <div className="takse-card-description">{description}</div>
    </div>
  );
}

export default TaskCard;
