import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const initialTitle = 'Bonjour !';
const initialContent = 'Vous souhaitez prendre des notes? \n ***Tester notre superbe Markdown*** \n \n Cest facile, pratique, et gratuit !';
localStorage.setItem(initialTitle, initialContent);

ReactDOM.render(<App /> , document.getElementById('root'));
