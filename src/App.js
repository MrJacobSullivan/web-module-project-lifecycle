import React from 'react'
import User from './components/User'
import './App.css'

class App extends React.Component {
  state = {
    input: '',
  }

  handleChange = (e) => {
    this.setState({ ...this.state, input: e.target.value })
  }

  render() {
    return (
      <main>
        <h1>Github Info</h1>

        <form>
          <input type='text' value={this.state.input} onChange={this.handleChange} />
          <button>Search</button>
        </form>

        <User input={this.state.input} />
      </main>
    )
  }
}

export default App
