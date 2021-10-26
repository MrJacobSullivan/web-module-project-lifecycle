import React from 'react'
import Follower from './Follower'

class FollowerList extends React.Component {
  state = {
    followers: [],
  }

  render() {
    return (
      <section>
        {this.state.followers.map((follower) => (
          <Follower />
        ))}
      </section>
    )
  }
}

export default FollowerList
