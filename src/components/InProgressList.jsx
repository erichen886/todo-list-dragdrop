import React, { useEffect, useRef } from 'react';
import InprogressCard from './InProgressCard';
import { getDragAfterElement } from './utility';

const InProgressList = ({ cards, lists }) => {
  const inProgCards = lists.entities[1558196569460].cards;
  const inProgListEl = useRef(null);

  const onDragOver = (e)=> {
    console.log('drag');
    e.preventDefault();
    const afterElement = getDragAfterElement(inProgListEl.current, e.clientY);
    const draggable = document.querySelector('.dragging');
    if(afterElement == null) {
      inProgListEl.current.appendChild(draggable);
    } else {
      inProgListEl.current.insertBefore(draggable, afterElement);
    }
  }

  useEffect(()=>{
    inProgListEl.current.focus();

    inProgListEl.current.addEventListener('dragover', onDragOver);

    return () => {
      inProgListEl.current.removeEventListener('dragover', onDragOver);
    }
  }, []);

  return(
    <div className="in-progress-list" ref={inProgListEl}>
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
