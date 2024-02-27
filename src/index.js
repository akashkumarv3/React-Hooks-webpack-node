import  ReactDOM  from "react-dom";
import App from "./App";
import React from "react";
import './style.css'

//below reactDOM will render this component APP into root container
ReactDOM.render(
<React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  );