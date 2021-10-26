import React from 'react'
import axios from 'axios'
import FollowerList from './FollowerList'

class User extends React.Component {
  state = {
    userData: {},
  }

  componentDidMount() {
    if (this.props.input) {
      axios
        .get(`https://api.github.com/users/${this.props.input}`)
        .then((res) => {
          this.setState({ ...this.state, userData: res.data })
        })
        .catch((err) => console.error(err))
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.input !== prevProps.input) {
      axios
        .get(`https://api.github.com/users/${this.props.input}`)
        .then((res) => {
          this.setState({ ...this.state, userData: res.data })
          this.setState({ ...this.state, error: '' })
          this.props.setError('')
        })
        .catch((err) => {
          this.props.setError('Invalid Username')
          console.error(err)
        })
    }
  }

  render() {
    if (!this.state.userData) return <h2>Loading...</h2>

    return (
      <section>
        <img src={this.state.userData.avatar_url} alt='' />
        <h2>{this.state.userData.login}</h2>

        <p>Total Repos: {this.state.userData.public_repos}</p>
        <p>Total Followers: {this.state.userData.followers}</p>

        <FollowerList login={this.state.userData.login} />
      </section>
    )
  }
}

export default User
