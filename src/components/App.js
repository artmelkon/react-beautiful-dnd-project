import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import initialData from "../initial-data";
import Column from '../components/Column';

function App() {
  const [isInitialData, setIsInitialData] = useState(initialData);
  const onDragEnd = result => {
    
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {isInitialData.columnOrder.map((columnId) => {
        const column = isInitialData.columns[columnId];
        const tasks = column.taskIds.map(
          (taskId) => isInitialData.tasks[taskId]
        );

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
      ;{" "}
    </DragDropContext>
  );
}

export default App;
