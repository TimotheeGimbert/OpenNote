import React, { useState } from "react";
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import Nav from './components/Nav';

import './App.scss';

const App = () => {
  const [titleValue, setTitle] = useState('TITLE');
  const [textValue, setText] = useState('Type your note here');

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const onTextChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="App">

      <div className="nav">
        <Nav />
      </div>

      <div className="page">
        <NoteDisplay titleValue={titleValue} textValue={textValue}/>
        <MarkdownInput titleValue={titleValue} textValue={textValue} onTitleChange={onTitleChange} onTextChange={onTextChange} />
      </div>

    </div>
  );
}

export default App;
