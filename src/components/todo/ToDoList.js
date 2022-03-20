import React from 'react'
import PropTypes from 'prop-types'
import ToDoAdd from './ToDoAdd'

class ToDoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      loaded: false,
      error: ''
    }

    this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  loadAllItems() {
    // this.setState({loaded: false})

    fetch(`${this.props.API_URL}/todo`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          loaded: true
        })

        console.log(json)
      })
      .catch(() => {
        this.setState({error: 'Failed to fetch '})
      })
  }

  componentDidMount() {
    this.loadAllItems()
  }

  handleChangeCheckbox(event) {
    const id = event.target.name
    const newItems = this.state.items
    const item = newItems.find(item => item.id == id)
    const index = newItems.indexOf(item)
    const description = item.description
    const mark = event.target.checked
    newItems[index].mark = mark

    this.setState({
      items: newItems
    })

    fetch(
      `${this.props.API_URL}/todo/update`,
      {
        method: 'POST',
        body: JSON.stringify({id: id, mark: mark ? '1' : '', description: description}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response))
  }

  deleteItem(id) {
    // this.setState({loaded: false})

    fetch(`${this.props.API_URL}/todo/remove/${id}`)
      .then(() => this.loadAllItems())
  }

  render() {
    const { items, loaded, error } = this.state
    const toDoAdd = <ToDoAdd API_URL={this.props.API_URL} finishChange={this.loadAllItems.bind(this)} />

    if (error !== '') {
      return (
        <div>
          <p>There is an error in the App.</p>
          <p>Error: {error}</p>
        </div>
      )
    }

    if (!loaded) {
      return <p>Data is loading, please wait...</p>
    }

    if (items.length == 0) {
      return (
        <div>
          <p>The list is empty.</p>
          {toDoAdd}
        </div>
      )
    }

    return (
      <div>
        {items.map(item => {
          return (
            <p key={item.id}>
              <input
                name={item.id}
                onChange={this.handleChangeCheckbox}
                type="checkbox"
                checked={item.mark}
              ></input>
              {item.mark} {item.description} <a href="#">Edit</a> <a onClick={() => this.deleteItem(item.id)} href="#">Remove</a>
            </p>
          )
        })}
        {toDoAdd}
      </div>
    )
  }
}

ToDoList.propTypes = {
  API_URL: PropTypes.string
}

export default ToDoList
