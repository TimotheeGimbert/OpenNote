import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import React, { useState } from "react";

import './App.scss';

const App = () => {
  const [value, setValue] = useState('Type your text');

  const onTyping = (event) => {
    setValue(event.target.value);
  }

  return (
    <div id="App">
      <NoteDisplay textBrut={value}/>
      <MarkdownInput textBrut={value} onTyping={onTyping} />
    </div>
  );
}

export default App;
