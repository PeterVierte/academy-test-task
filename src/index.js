import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import App from './App'

import './assets/styles/index.scss'
import 'react-toastify/dist/ReactToastify.css';



const rootView = document.getElementById('root')

if (rootView) {
  ReactDOM.render(
      <BrowserRouter>
          <App />
      </BrowserRouter>,
    rootView
  )
}
