import React from 'react';

const App = () => {
  return(
    <div>
      <div className="list-gridcontainer">
        <div className="title">Kanban Board</div>
        <div className="add-task">add task</div>
        <div className="add-in-progress"> add in progress</div>
        <div className="add-completed"> add completed</div>
        <div className="task-list">
          <div className ="task-card">
            card1
          </div>
        </div>
        <div className="in-progress-list">
          <div>card2</div>
        </div>
        <div className="completed-list">
          <div>card3</div>
        </div>
      </div>
    </div>
  )
}

export default App;
