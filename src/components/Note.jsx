import React from "react";

const Note = (props) => {
  
  return (
    <div id={props.title} className="note" onClick={props.handleClick}>
      <h1 className="title">{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
};

export default Note;