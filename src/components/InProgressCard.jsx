import React, { useEffect, useRef } from 'react';

const InProgressCard = ({ cardId, cards }) => {
  const { title, description } = cards.entities[cardId];
  const InProgressCardEl = useRef(null);

  const onDrag = (e) => {
    console.log('In progress', e);
    InProgressCardEl.current.classList.add('dragging');
  }
  const onDragEnd = (e) => {
    InProgressCardEl.current.classList.remove('dragging');
  }

  useEffect(()=>{
    InProgressCardEl.current.focus();

    InProgressCardEl.current.addEventListener('dragstart', onDrag);
    InProgressCardEl.current.addEventListener('dragend', onDragEnd);

    return () => {
      InProgressCardEl.current.removeEventListener('dragstart', onDrag);
      InProgressCardEl.current.removeEventListener('dragstart', onDrag);
    }
  },[]);

  return (
    <div className="in-progress-card draggable" draggable="true" ref={InProgressCardEl}>
      <div className="in-progress-card-title">{title}</div>
      <div className="in-progress-card-description">{description}</div>
    </div>
  );
}

export default InProgressCard;
