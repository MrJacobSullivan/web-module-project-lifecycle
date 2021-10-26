import React from 'react'
import Follower from './Follower'

class FollowerList extends React.Component {
  render() {
    if (!this.props.followers) return null

    return (
      <section>
        <h2>Followers:</h2>
        {this.props.followers.map((follower) => (
          <Follower key={follower.id} user={follower} click={this.props.click} />
        ))}
      </section>
    )
  }
}

export default FollowerList
