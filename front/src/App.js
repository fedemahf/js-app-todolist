import React from 'react'
// import ToDoAdd from './components/todo/ToDoAdd'
// import logo from './logo.svg'
import './App.css'
import ToDoList from './components/todo/ToDoList'
import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <ToDoList API_URL={this.props.API_URL} />
      </div>
    )
  }
}

App.propTypes = {
  API_URL: PropTypes.string
}

export default App
