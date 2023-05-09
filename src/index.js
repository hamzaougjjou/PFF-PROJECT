import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';
import './assets/fontOwsome/css/all.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App2 />
      {/* <App /> */}
    </React.StrictMode>
  </BrowserRouter>

);

reportWebVitals();