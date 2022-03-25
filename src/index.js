import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "jquery/dist/jquery.js"
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import "./components/About/About.css"
import "./components/Work/work.css"
import "./components/Contact/contact.css"
import  'fontawesome-5-icons-list';
import "@fortawesome/fontawesome-free"


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));


