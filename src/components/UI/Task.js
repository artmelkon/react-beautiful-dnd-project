import React from "react";

function Task(props) {
  return <div className={props.classTask}>{props.children}</div>;
}

export default Task;
