import React from "react";

function Card(props) {
  // console.log(props);

  const dragStart = (e) => {
    const target = e.target;
    console.log("getting dragged ", target);

    e.dataTransfer.setData("card_id", target.id);
    e.dataTransfer.effectAllowed = "move";
    target.style.border = "dashed";

    console.log(e.dataTransfer.effectAllowed);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
    console.log("dragOver: dropEffect = ", e.dataTransfer.effectAllowed);

    e.dataTransfer.dropEffect = "move";
  };

  const dragendHandler = (e) => {
    // console.log(e);
    props.onIsDropped(false, e.target.id);
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
      onDragEnd={dragendHandler}
    >
      {props.children}
    </div>
  );
}

export default Card;
