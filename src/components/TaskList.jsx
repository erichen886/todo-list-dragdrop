import React, { useEffect, useRef } from 'react';
import TaskCard from './TaskCard';
import { getDragAfterElement } from './utility';

const TaskList = ({ cards, lists }) => {
  const taskCards = lists.entities[1558196567543].cards;
  const taskListEl = useRef(null);

  const onDragOver = (e) => {
    console.log("drag"); // remove

    //by default dropping inside of an element is disabled
    e.preventDefault();
    const afterElement = getDragAfterElement(taskListEl.current, e.clientY);
    console.log(afterElement); //remove
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
      taskListEl.current.appendChild(draggable);
    } else {
      taskListEl.current.insertBefore(draggable, afterElement);
    }
  };



  useEffect(() => {
    taskListEl.current.focus();

    taskListEl.current.addEventListener('dragover', onDragOver);

    return () => {
      taskListEl.current.removeEventListener('dragover', onDragOver);
    }
  }, [])

  return(
    <div className="task-list" ref={taskListEl}>
      {
        taskCards.map((cardId) =>{
          return (
            <TaskCard
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

export default TaskList;
