import React, { useState } from "react";
import Showdown from 'showdown';
const converter = new Showdown.Converter();

const NoteDisplay = (props) => {

  const createMarkup = (content) => {
    return { __html: converter.makeHtml(content) };
  };

  return (
    <section className="NoteDisplay">
      <h1 className="title" dangerouslySetInnerHTML={createMarkup(props.title)} />
      <p dangerouslySetInnerHTML={createMarkup(props.content)} />
    </section>
  );
};

export default NoteDisplay;