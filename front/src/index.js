import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'index.css';
import Cursor from 'components/Cursor'

document.addEventListener('DOMContentLoaded', e => {
  Cursor();
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
