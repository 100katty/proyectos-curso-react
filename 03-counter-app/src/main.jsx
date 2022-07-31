import React from 'react';
import ReactDOM from 'react-dom/client';
//import {HelloWordApp} from './HelloWord';
//import { FirsApp } from './FirsApp';
import { CounterApp } from './CounterApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
         <CounterApp value={20} /> 
        
        {/* <FirsApp title="hola, soy mundo" />*/}
    </React.StrictMode>
);