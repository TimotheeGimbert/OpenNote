import React, { useState } from "react";
import Nav from './components/Nav'
import NoteDisplay from './components/NoteDisplay';
import MarkdownInput from './components/MarkdownInput';

import './App.scss';

const App = () => {
  const [title, setTitle] = useState('Titre de la note');
  const [content, setContent] = useState('Contenu de la note');
  const [oldTitle, setOldTitle] = useState(title);

  console.log('>>>>>>>>> APP render');
  console.log('TITLE: ', title);
  console.log('CONTENT: ', content);
  console.log('old title: ', oldTitle);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  }
  const onContentChange = (event) => {
    setContent(event.target.value);
  }

  const handleSave = () => {
    localStorage.setItem(title, content);
    localStorage.removeItem(oldTitle);
    console.log('NEW NOTE SAVED ', title, content);
  }

  return (
    <div className="App">
      <Nav 
        changeTitle={title => setTitle(title)} 
        changeContent={content => setContent(content)}
        changeOldTitle={title => setOldTitle(title)} 
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
        <button onClick={handleSave}>Save your note</button>
      </div>
    </div>
  );
}

export default App;


