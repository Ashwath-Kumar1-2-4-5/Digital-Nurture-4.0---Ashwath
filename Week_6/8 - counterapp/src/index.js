import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot for modern React
import './index.css'; // Import index.css (we will clear its content)
import App from './App'; // Import your App component
import reportWebVitals from './reportWebVitals'; // Keep this if you want web vitals reporting

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App /> {/* Renders your App component, which is our counter */}
  </React.StrictMode>
);

reportWebVitals();