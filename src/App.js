import React from 'react'
import axios from 'axios'
import User from './components/User'
import './App.css'

class App extends React.Component {
  state = {
    input: '',
    search: 'mrjacobsullivan',
    userData: {},
    followers: [],
    error: '',
  }

  setInput = (input) => {
    this.setState({ ...this.state, input: input })
  }

  setSearch = (search) => {
    this.setState({ ...this.state, search: search })
  }

  setUserData = (userData) => {
    this.setState({ ...this.state, userData: userData })
  }

  setFollowers = (followers) => {
    this.setState({ ...this.state, followers: [this.state.followers, ...followers] })
  }

  setError = (error) => {
    this.setState({ ...this.state, error: error })
  }

  getUserData = (login) => {
    axios
      .get(`https://api.github.com/users/${login}`)
      .then((res) => {
        this.setUserData(res.data)
      })
      .catch((err) => {
        this.setError('Invalid Username')
        console.error(err)
      })
  }

  getFollowers = (login) => {
    axios
      .get(`https://api.github.com/users/${login}/followers`)
      .then((res) => {
        this.setFollowers(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  handleChange = (e) => {
    this.setInput(e.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.setSearch(this.state.input)
  }

  componentDidMount() {
    this.getUserData(this.state.search)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userData !== prevState.userData) {
      this.getFollowers(this.state.userData.login)
    }
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

        <User userData={this.state.userData} followers={this.state.followers} />
      </main>
    )
  }
}

export default App
