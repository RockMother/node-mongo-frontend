import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Handler } from 'react-router-dom';
import './styles/styles';
import 'font-awesome/css/font-awesome.css';
import App from './components/app';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));

