import React, { useState } from "react";
import Nav from './components/Nav'
import Page from './components/Page'

import './App.scss';

const App = () => {
  const [title, setTitle] = useState('Titre de la note');
  const [content, setContent] = useState('Contenu de la note');

  console.log('>>>>>>>>> APP render');
  console.log('TITLE: ', title);
  console.log('CONTENT: ', content);

  return (
    <div className="App">
      <Nav 
        changeTitle={title => setTitle(title)} 
        changeContent={content => setContent(content)} 
      />
      <Page 
        title={title}
        content={content}  
      />
    </div>
  );
}

export default App;
