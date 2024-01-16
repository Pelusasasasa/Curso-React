import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './HelloWordApp';
import { FirstApp } from './FirstApp';
import './style.css';
import {CounterApp} from './CounterApp';




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={5} />
        {/* <FirstApp title='Hola Soy Vegeta'/> */}
    </React.StrictMode>
)
