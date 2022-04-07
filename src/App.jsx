import React, { useState } from "react";
import Nav from './components/Nav'
import NoteDisplay from './components/NoteDisplay';
import MarkdownInput from './components/MarkdownInput';

import './App.scss';

const App = () => {
  const [title, setTitle] = useState('Titre de la note');
  const [content, setContent] = useState('Contenu de la note');
  const [previousTitle, setPreviousTitle] = useState(title);

  const onTitleChange = (event) => setTitle(event.target.value);
  const onContentChange = (event) => setContent(event.target.value);

  const handleNav = (title, content) => {
    setTitle(title);
    setContent(content);
    setPreviousTitle(title);
  }

  const handleSave = () => {
    localStorage.removeItem(previousTitle);
    localStorage.setItem(title, content);
    window.location.reload(false);
  }

  return (
    <div className="App">
      <Nav selectNote={handleNav} />

      <div className="page">
        <NoteDisplay 
          title={title} 
          content={content} />

        <MarkdownInput 
          title={title} 
          content={content}
          onTitleChange={onTitleChange} 
          onContentChange={onContentChange} />

        <button onClick={handleSave}>Enregistrer la note</button>
      </div>
    </div>
  );
}

export default App;


