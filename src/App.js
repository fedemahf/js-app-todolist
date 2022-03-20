import React from 'react'
// import ToDoAdd from './components/todo/ToDoAdd'
// import logo from './logo.svg'
import './App.css'
import ToDoList from './components/todo/ToDoList'

export default class App extends React.Component {
  API_URL = 'http://localhost:3001'

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <ToDoList API_URL={this.API_URL} />
      </div>
    )
  }
}
