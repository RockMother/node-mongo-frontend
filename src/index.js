import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

import './styles/styles';

import App from './components/app';
import initialState from './reducers/initialState';

const store = configureStore(initialState);
render(
    <Provider store={store}>
        <BrowserRouter><App /></BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));
