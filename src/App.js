import React from 'react'
import axios from 'axios'
import User from './components/User'
import './App.css'

class App extends React.Component {
  defaultSearch = 'mrjacobsullivan'

  state = {
    input: '',
    search: this.defaultSearch,
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
    this.setState({ ...this.state, followers: followers })
  }

  setError = (error) => {
    this.setState({ ...this.state, error: error })
  }

  getUserData = (login) => {
    axios
      .get(`https://api.github.com/users/${login}`)
      .then((res) => {
        this.setUserData(res.data)
        this.setError('')
      })
      .catch((err) => {
        console.error(err)
        this.setError('Invalid Username')
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

    if (this.state.input) this.setSearch(this.state.input)
    else this.setSearch(this.defaultSearch)
  }

  handleFollowerClick = (userData) => {
    this.setSearch(userData.login)
  }

  componentDidMount() {
    this.getUserData(this.state.search)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userData !== prevState.userData) {
      this.getFollowers(this.state.userData.login)
    }

    if (this.state.search !== prevState.search) {
      this.getUserData(this.state.search)
    }
  }

  render() {
    return (
      <main>
        <h1>Github Info</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='GitHub Handle'
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button>Search</button>
          <p>{this.state.error}</p>
        </form>

        <User
          userData={this.state.userData}
          followers={this.state.followers}
          click={this.handleFollowerClick}
        />
      </main>
    )
  }
}

export default App
