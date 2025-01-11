import React from "react";
//Herramienta para renderizar 
import ReactDOM from 'react-dom/client';
import App from "./HelloWorldApp";
import FirstApp from "./FirstApp";
import './styles.css'

//Renderizando 
ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        <FirstApp/>
    </React.StrictMode>
);