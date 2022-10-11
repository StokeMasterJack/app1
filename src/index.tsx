import React from 'react';
import ReactDOM from 'react-dom/client';
import {App1} from './App1';
import './css/index.css';
import './css/index.robo.css';
import {startReact} from './util';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

function renderToDom() {
    root.render(
        <App1/>
    );

}


startReact(renderToDom);