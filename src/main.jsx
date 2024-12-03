import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Header } from './Components/Header.jsx'
import { JStoJSX } from './Components/JStoJSX.jsx'
import { Member } from './Components/Member.jsx'

ReactDOM.createRoot(document.getElementById('jai')).render(
  <React.StrictMode>
    <App />
    <Header />
    <JStoJSX />
    <Member />
  </React.StrictMode>,
)
