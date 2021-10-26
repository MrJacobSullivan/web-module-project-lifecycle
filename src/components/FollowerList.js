import React from 'react'
import Follower from './Follower'

class FollowerList extends React.Component {
  render() {
    if (!this.props.followers) return null

    return (
      <section>
        <h2>Followers:</h2>
        {this.props.followers.map((follower, index) => (
          <Follower key={follower.id ? follower.id : index} user={follower} />
        ))}
      </section>
    )
  }
}

export default FollowerList
