import React from "react";
import { Droppable } from "react-beautiful-dnd";

import Container from "./UI/Container";
// import Draggable from './UI/Draggable';
import Task from "./UI/Task";

import classes from "./Column.module.scss";

const Column = (props) => {
  return (
    <Container classContainer={classes.container}>
      <h3 className={classes.title}>{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {(provided) => (
          <div
            className={classes.tasklist}
            innerRef={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.tasks.map((task) => (
              <Task key={task.id} task={task} classTask={classes.task}>
                {task.content}
              </Task>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
