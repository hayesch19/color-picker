import React, { Component } from 'react'
import Header from './components/header-section'
// import ColorSelector from './components/ColorSelector.jsx'
import ColorSelectorHooks from './components/ColorSelectorHooks.jsx'

class App extends Component {
  render() {
    console.log('NewColor')
    return (
      <main>
        <Header />
        {/* <ColorSelector /> */}
        <ColorSelectorHooks />
        <footer>
          <h5>
            "Build a color slider in React they said, it will be fun they said"
            - Anonymous
          </h5>
        </footer>
      </main>
    )
  }
}

export default App
