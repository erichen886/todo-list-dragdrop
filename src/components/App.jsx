import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import InProgressList from './InProgressList';
import CompletedList from './CompletedList';

import { users, lists, cards } from '../normalized-state';

const App = () => {
  const [userState, setUserState] = useState(users);
  const [listsState, setListsState] = useState(lists);
  const [cardsState, setCardsState] = useState(cards);

  return(
    <div>
      <div className="list-gridcontainer">
        <div className="title">Kanban Board</div>
        <div className="add-task">add task</div>
        <div className="add-in-progress"> add in progress</div>
        <div className="add-completed"> add completed</div>
        <TaskList
          cards={cardsState}
          lists={listsState}
        />
        <InProgressList
          cards={cardsState}
          lists={listsState}
        />
        <CompletedList
          cards={cardsState}
          lists={listsState}
        />
      </div>
    </div>
  )
}

export default App;
