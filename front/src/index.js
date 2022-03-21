import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import ToDoEdit from './components/todo/ToDoEdit'

// const API_URL = 'http://localhost:3001'
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App API_URL={API_URL} />} />
        <Route path="edit/:id" element={<ToDoEdit API_URL={API_URL} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
