import React from 'react';
import ReactDOM from 'react-dom/client'; // <-- use 'react-dom/client'
import './index.css';
import OnlineShopping from './App'; // default import

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OnlineShopping />
  </React.StrictMode>
);