import React from 'react'
import axios from 'axios'
import User from './components/User'
import './App.css'

class App extends React.Component {
  state = {
    data: {},
    input: 'mrjacobsullivan',
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.input}`)
      .then((res) => {
        this.setState({ ...this.state, data: res.data })
      })
      .catch((err) => console.error(err))
  }

  render() {
    return (
      <main>
        <h1>Github Info</h1>

        <form>
          <input type='text' value={this.state.input} />
          <button>Search</button>
        </form>

        <User />
      </main>
    )
  }
}

export default App
