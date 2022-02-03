import React, { useState } from "react";
import Showdown from 'showdown';
const converter = new Showdown.Converter();

const NoteDisplay = (props) => {

  const createMarkup = () => {
    let conversion = converter.makeHtml(props.textBrut);
    return { __html: conversion };
  };
    
  return (
    <section id="NoteDisplay">
      <h1>NoteDisplay</h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </section>
  );
};

export default NoteDisplay;