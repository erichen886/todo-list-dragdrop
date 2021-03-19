import React, { useEffect, useRef } from 'react';

const CompletedCard = ({ cardId, cards }) => {

  const { title, description } = cards.entities[cardId];
  const completedCardEl = useRef(null);

  const onDrag = (e) => {
    console.log('dragged complete', e);
    completedCardEl.current.classList.add('dragging');
  };
  const onDragEnd = (e) => {
    completedCardEl.current.classList.remove('dragging');
  }

  useEffect(()=>{
    completedCardEl.current.focus();

    completedCardEl.current.addEventListener('dragstart', onDrag);
    completedCardEl.current.addEventListener('dragend', onDragEnd);

    return () =>{
      completedCardEl.current.removeEventListener('dragstart', onDrag);
      completedCardEl.current.removeEventListener('dragend', onDragEnd);
    }
  },[])
  return (
    <div className="completed-card draggable" draggable="true" ref={completedCardEl}>
      <div className="completed-card-title">{title}</div>
      <div className="completed-card-description">{description}</div>
    </div>
  );
}

export default CompletedCard;
