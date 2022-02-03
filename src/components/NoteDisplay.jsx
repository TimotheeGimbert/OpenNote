import React, { useState } from "react";
import './noteDisplay.scss'
import Showdown from 'showdown';
const converter = new Showdown.Converter();

const NoteDisplay = (props) => {
  
  const createMarkupTitle = () => {
    return { __html: converter.makeHtml(props.titleValue) };
  };

  const createMarkupText = () => {
    return { __html: converter.makeHtml(props.textValue) };
  };
 
  return (
    <section className="NoteDisplay">
      <div dangerouslySetInnerHTML={createMarkupTitle()} />
      <div dangerouslySetInnerHTML={createMarkupText()} />
    </section>
  );
};

export default NoteDisplay;