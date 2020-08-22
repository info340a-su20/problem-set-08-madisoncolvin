/* Madison Colvin */

import React from 'react';
import ReactDOM from 'react-dom';

//render the App component here!

/* Step two */
import { App } from "./App";

/* Step seven */
import senators from "./senators";

/* ReactDOM.render() function to render an instance of the App class into the HTML-provided #root element */
ReactDOM.render(<App senators = { senators } />, document.getElementById("root"));