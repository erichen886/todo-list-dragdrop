import React, { useEffect, useRef } from 'react';
import CompletedCard from './CompletedCard';
import { getDragAfterElement } from './utility';

const CompletedList = ({ cards, lists }) => {
  const completedCards = lists.entities[1558196570597].cards;
  const completedListEl = useRef(null);

  const onDragOver = (e) => {
    console.log('drag');

    e.preventDefault();
    const afterElement = getDragAfterElement(completedListEl.current, e.clientY);
    const draggable = document.querySelector('.dragging');
    if(afterElement == null) {
      completedListEl.current.appendChild(draggable);
    } else {
      completedListEl.current.insertBefore(draggable, afterEleemnt);
    }
  };

  useEffect(() => {
    completedListEl.current.focus();

    completedListEl.current.addEventListener('dragover', onDragOver);

    return () => {
      completedListEl.current.removeEventListener('dragover', onDragOver);
    }
  },[]);

  return(
    <div className="completed-list" ref={completedListEl}>
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
