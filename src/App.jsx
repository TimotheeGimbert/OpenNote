import React, { useState } from "react";
import Nav from './components/Nav'
import NoteDisplay from './components/NoteDisplay';
import MarkdownInput from './components/MarkdownInput';

import './App.scss';

const App = () => {
  const [title, setTitle] = useState('Titre de la note');
  const [content, setContent] = useState('Contenu de la note');

  console.log('>>>>>>>>> APP render');
  console.log('TITLE: ', title);
  console.log('CONTENT: ', content);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const onContentChange = (event) => {
    setContent(event.target.value);
  }

  return (
    <div className="App">
      <Nav 
        changeTitle={title => setTitle(title)} 
        changeContent={content => setContent(content)} 
      />
      <div className="page">
        <NoteDisplay 
          title={title} 
          content={content} 
        />
        <MarkdownInput 
          title={title} 
          content={content} 
          onTitleChange={onTitleChange} 
          onContentChange={onContentChange}
        />
      {/* <button onClick={handleSave}>Save your note</button> */}
    </div>
    </div>
  );
}

export default App;


/*   const handleSave = () => {
    localStorage.setItem(title, text);
    console.log('NEW NOTE SAVED ', title, text);
    localStorage.removeItem(props.noteTitle);
  } */