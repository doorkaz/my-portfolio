// Import all from Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

// React dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Navigation through pages
import { BrowserRouter } from 'react-router-dom';

// Styles
import './styles/App.css'
import './styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<BrowserRouter>
    	<App/>
  	</BrowserRouter>
);
