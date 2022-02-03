import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import './App.scss';

function App() {
  return (
    <div id="App">
      <NoteDisplay />
      <MarkdownInput />
    </div>
  );
}

export default App;
