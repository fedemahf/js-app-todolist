import React from 'react'
import PropTypes from 'prop-types'

class ToDoAdd extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: '',
      marked: false
    }

    this.handleOnClick = this.handleOnClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({description: event.target.value})
  }

  handleOnClick() {
    fetch(
      `${this.props.API_URL}/todo/new`,
      {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .catch(error => {
        console.error('Error:', error)
        this.props.finishChange()
      })
      .then(() => {
        this.setState({description: ''})
        this.props.finishChange()
      })
  }

  render() {
    return (
      <div>
        <label>
          <p>Add new item:</p>
          <input onChange={this.handleChange} type="text" value={this.state.description}></input>
        </label>
        &nbsp;
        <button onClick={this.handleOnClick}>Add item</button>
      </div>
    )
  }
}

ToDoAdd.propTypes = {
  API_URL: PropTypes.string,
  finishChange: PropTypes.func
}

export default ToDoAdd
