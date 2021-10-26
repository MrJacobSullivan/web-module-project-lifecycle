import React from 'react'
import FollowerList from './FollowerList'

class User extends React.Component {
  render() {
    return (
      <section>
        <img src='' alt='' />
        <h2>@username</h2>

        <p>Total Repos: 0</p>
        <p>Total Followers: 0</p>

        <FollowerList />
      </section>
    )
  }
}

export default User
