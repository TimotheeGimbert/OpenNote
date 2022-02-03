import React, { useState } from "react";
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import Note from './components/Note';

import './App.scss';

const App = () => {
  const [title, setTitle] = useState('Titre de la note');
  const [text, setText] = useState('Contenu de la note');

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  }

  const onTextChange = (event) => {
    setText(event.target.value);
  }

  const handleClick = (event) => {
    const tag = event.target.tagName;
    const trueTarget = (tag === "H1" || tag === "P") ? event.target.parentNode : event.target ;
    const title = trueTarget.id;
    const text = localStorage.getItem(title);
    setTitle(title);
    setText(text);
  }

  const removeOld = (currentTitle) => {
    localStorage.removeItem(currentTitle);
  };

  return (
    <div className="App">

      <div className="nav" >
        {Object.keys(localStorage).map( (key, index) => (
          <Note handleClick={handleClick} title={key} content={localStorage[key]} key={index} />
        ))} 
      </div>

      <div className="page">
        <NoteDisplay title={title} text={text} />
        <MarkdownInput removeOld={removeOld} title={title} text={text} onTitleChange={onTitleChange} onTextChange={onTextChange} />
      </div>

    </div>
  );
}

export default App;
