import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import React, { useState } from "react";

import './App.scss';

const App = () => {
  const [value, setValue] = useState('');

  const onTyping = (event) => {
    setValue(event.target.value);
  }

  return (
    <div id="App">
      <NoteDisplay />
      <MarkdownInput value={value} onChange={onTyping} />
    </div>
  );
}

export default App;
