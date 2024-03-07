import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {Toaster} from 'react-hot-toast'

import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from './redux/Store/store'
import ThemeProvider from "./components/ThemeProvider.js/ThemeProvider";
import axios from 'axios'

axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
  <ThemeProvider>
  <App />
  </ThemeProvider>
      
      <Toaster/>
    </BrowserRouter>

  </Provider>
    
  </React.StrictMode>
);
