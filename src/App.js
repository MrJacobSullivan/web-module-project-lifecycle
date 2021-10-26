import React from 'react'
import User from './components/User'
import './App.css'

class App extends React.Component {
  state = {
    input: '',
    user: 'mrjacobsullivan',
    error: '',
  }

  handleChange = (e) => {
    this.setState({ ...this.state, input: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ ...this.state, user: this.state.input })
  }

  setError = (error) => {
    this.setState({ ...this.state, error: error })
  }

  render() {
    return (
      <main>
        <h1>Github Info</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Username'
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button>Search</button>
          <p>{this.state.error}</p>
        </form>

        <User input={this.state.user} setError={this.setError} />
      </main>
    )
  }
}

export default App
