import React from 'react'
import User from './components/User'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Github Info</h1>

        <form>
          <input type='text' />
          <button>Search</button>
        </form>

        <User />
      </main>
    )
  }
}

export default App
