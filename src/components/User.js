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
          console.log(res.data)
          this.setState({ ...this.state, userData: res.data })
        })
        .catch((err) => console.error(err))
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

        <FollowerList username={this.state.userData.login} />
      </section>
    )
  }
}

export default User
