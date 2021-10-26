import React from 'react'

class Follower extends React.Component {
  handleClick = () => {
    this.props.click(this.props.user)
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <img src={this.props.user.avatar_url} alt='' />
        <h3>{this.props.user.login}</h3>
      </div>
    )
  }
}

export default Follower
