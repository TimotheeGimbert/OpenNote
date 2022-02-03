import React, { useState } from "react";

const NoteDisplay = (props) => {

  const capitalizze = () => {
    return props.textBrut.toUpperCase();
  };
    
  return (
    <section id="NoteDisplay">
      <h1>NoteDisplay</h1>
      <p>{capitalizze()}</p>
    </section>
  );
};

export default NoteDisplay;