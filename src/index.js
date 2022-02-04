import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

localStorage.setItem('Hello Friend', '###Welcome to the notePad like app !');

ReactDOM.render(<App /> , document.getElementById('root'));
