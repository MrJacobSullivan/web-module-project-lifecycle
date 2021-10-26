import React from 'react'
import Follower from './Follower'

class FollowerList extends React.Component {
  render() {
    return (
      <section>
        {this.props.followers.map((follower) => (
          <Follower />
        ))}
      </section>
    )
  }
}

export default FollowerList
