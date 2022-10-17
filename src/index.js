import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Page2 from './Page2';
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/page2' element={<Page2 />} />
      </Routes>
    </Router>,
  </React.StrictMode>
);

