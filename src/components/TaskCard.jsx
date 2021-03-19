import React, { useEffect, useRef } from 'react';

const TaskCard = ({ cardId, cards }) => {
  const { title, description } = cards.entities[cardId];
  const taskCardEl = useRef(null);

  const onDrag = (e) => {
    console.log('dragged', e); //remove
    taskCardEl.current.classList.add('dragging');
  };

  const onDragEnd = (e) => {
    taskCardEl.current.classList.remove('dragging');
  }


  useEffect(()=>{
    taskCardEl.current.focus();

    taskCardEl.current.addEventListener('dragstart', onDrag);
    taskCardEl.current.addEventListener('dragend', onDragEnd);


    return() => {
      taskCardEl.current.removeEventListener('dragstart', onDrag);
      taskCardEl.current.removeEventListener('dragend', onDragEnd);
    }
  },);

  return (
    <div className ="task-card draggable" draggable="true" ref={taskCardEl}>
      <div className="task-card-title">{title}</div>
      <div className="taks-card-description">{description}</div>
    </div>
  );
}

export default TaskCard;
