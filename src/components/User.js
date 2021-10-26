import React from 'react'
import FollowerList from './FollowerList'

class User extends React.Component {
  render() {
    return (
      <section>
        <img src={this.props.userData.avatar_url} alt='' />
        <h2>{this.props.userData.login}</h2>

        <p>Total Repos: {this.props.userData.public_repos}</p>
        <p>Total Followers: {this.props.userData.followers}</p>

        <FollowerList followers={this.props.followers} />
      </section>
    )
  }
}

export default User
