import React, { Component } from 'react'
import Header from './components/header-section'
import ColorSelector from './components/color-selector'

class App extends Component {
  render() {
    console.log('COLOR!')
    return (
      <main>
        <Header />
        <ColorSelector />
        <footer>
          <h5>
            Build a color slider in React they said, it will be fun they said
          </h5>
        </footer>
      </main>
    )
  }
}

export default App
