import React from 'react';
import ReactDOM from 'react-dom/client';
import {App, AboutApp} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AboutApp />
  </React.StrictMode>
);
