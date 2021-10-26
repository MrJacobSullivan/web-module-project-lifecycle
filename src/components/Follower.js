import React from 'react'

class Follower extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.user.avatar_url} alt='' />
        <h3>{this.props.user.login}</h3>
      </div>
    )
  }
}

export default Follower
