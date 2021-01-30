import React from 'react';
import CompletedCard from './CompletedCard';
const CompletedList = ({ cards, lists }) => {
  const completedCards = lists.entities[1558196570597].cards;

  return(
    <div className="completed-list">
      {completedCards.map(cardId =>{
          return (
            <CompletedCard
              key={cardId}
              cardId={cardId}
              cards={cards}
            />
          )
        })
      }
    </div>
  )
}

export default CompletedList;
