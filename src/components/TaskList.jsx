import React from 'react';
import TaskCard from './TaskCard';
const TaskList = ({ cards, lists }) => {
  const taskCards = lists.entities[1558196567543].cards;
  console.log(taskCards)
  return(
    <div className="task-list">
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
