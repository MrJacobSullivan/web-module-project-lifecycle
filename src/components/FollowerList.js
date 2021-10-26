import React from 'react'
import axios from 'axios'
import Follower from './Follower'

class FollowerList extends React.Component {
  state = {
    followers: [],
  }

  getFollowers = () => {
    axios
      .get(`https://api.github.com/users/${this.props.login}/followers`)
      .then((res) => {
        this.setState({ ...this.state, followers: [...this.state.followers, ...res.data] })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  componentDidMount() {
    this.getFollowers()
  }

  componentDidUpdate(prevProps) {
    if (this.props.user) {
      if (this.props.user !== prevProps.user) this.getFollowers()
    }
  }

  render() {
    return (
      <section>
        <h2>Followers:</h2>
        {this.state.followers.map((follower) => (
          <Follower key={follower.id} user={follower} />
        ))}
      </section>
    )
  }
}

export default FollowerList
