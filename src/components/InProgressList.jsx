import React from 'react';
import InprogressCard from './InProgressCard';
const InProgressList = ({ cards, lists }) => {
  const inProgCards = lists.entities[1558196569460].cards;

  return(
    <div className="in-progress-list">
       {
        inProgCards.map((cardId) =>{
          return (
            <InprogressCard
              key={cardId}
              cardId={cardId}
              cards={cards}
            />
          );
        })
      }
    </div>
  )
}

export default InProgressList;
