import React from 'react'
import PropTypes from 'prop-types'
import withRouter from '../withRouter'

class ToDoEdit extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: -1,
      originalDescription: '',
      description: '',
      mark: false,
      loaded: false,
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClickBtnSave = this.handleClickBtnSave.bind(this)
    this.handleClickBtnCancel = this.handleClickBtnCancel.bind(this)
  }

  componentDidMount() {
    let id = this.props.router.params.id

    fetch(`${this.props.API_URL}/todo/get/${id}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          id: json.id,
          originalDescription: json.description,
          description: json.description,
          mark: json.mark,
          loaded: true
        })
      })
      .catch(() => {
        this.setState({error: 'Failed to fetch at mount'})
      })
  }
  
  handleChange(event) {
    this.setState({description: event.target.value})
  }

  handleClickBtnSave() {
    const id = this.state.id
    const description = this.state.description
    const mark = this.state.mark

    fetch(
      `${this.props.API_URL}/todo/update`,
      {
        method: 'POST',
        body: JSON.stringify({
          id: id, mark: mark ? '1' : '', description: description
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .then(res => res.json())
      .catch(() => {
        this.setState({error: 'Failed to fetch at save'})
      })
      .then(() => {
        this.props.router.navigate('/')
      })
  }

  handleClickBtnCancel() {
    this.props.router.navigate('/')
  }

  render() {
    const { loaded, error } = this.state

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

    return (
      <main>
        <h1>Editing Task &quot;{this.state.originalDescription}&quot;</h1>
        <input type="text" onChange={this.handleChange} value={this.state.description}></input>
        &nbsp;
        <button onClick={this.handleClickBtnSave}>Save</button>
        &nbsp;
        <button onClick={this.handleClickBtnCancel}>Cancel</button>
      </main>
    )
  }
}

ToDoEdit.propTypes = {
  API_URL: PropTypes.string,
  router: PropTypes.object
}

export default withRouter(ToDoEdit)
