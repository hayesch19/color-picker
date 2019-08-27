// import React, { Component } from 'react'

// class ColorSelector extends Component {
//   state = {
//     hue: Math.floor(Math.random() * 360),
//     saturation: Math.floor(Math.random() * 100),
//     lightness: Math.floor(Math.random() * 100),
//     hueInput: '',
//     saturationInput: '',
//     lightnessInput: ''
//   }
//   setHueInput = event => {
//     console.log(event.target.value)
//     this.setState({
//       hue: event.target.value
//     })
//   }
//   setSaturationInput = event => {
//     console.log(event.target.value)
//     this.setState({
//       saturation: event.target.value
//     })
//   }
//   setLightnessInput = event => {
//     console.log(event.target.value)
//     this.setState({
//       lightness: event.target.value
//     })
//   }

//   randomColor = event => {
//     this.setState({
//       hue: Math.floor(Math.random() * 360),
//       saturation: Math.floor(Math.random() * 100),
//       lightness: Math.floor(Math.random() * 100)
//     })
//     console.log('NewRandomColor')
//   }

//   render() {
//     return (
//       <section>
//         <div className="results-area">
//           <p
//             className="color-results"
//             style={{
//               backgroundColor: `hsl(${this.state.hue},${this.state.saturation}% ,${this.state.lightness}%)`
//             }}
//           />
//         </div>
//         <div className="color-sliders">
//           <div className="unicorn">
//             <h3>Hue</h3>
//             <input
//               className="hue"
//               type="range"
//               min="1"
//               max="360"
//               value={this.state.hue}
//               onChange={this.setHueInput}
//             />
//           </div>
//           <div className="unicorn">
//             <h3>Saturation</h3>
//             <input
//               className="saturation"
//               type="range"
//               value={this.state.saturation}
//               onChange={this.setSaturationInput}
//             />
//           </div>
//           <div className="unicorn">
//             <h3>Lightness</h3>
//             <input
//               className="lightness"
//               type="range"
//               value={this.state.lightness}
//               onChange={this.setLightnessInput}
//             />
//           </div>
//           <h3 className="values">
//             {`hsl(${this.state.hue},${this.state.saturation}% ,${this.state.lightness}%)`}
//           </h3>
//           <button className="hover" onClick={this.randomColor}>
//             Get A Random Color
//           </button>
//         </div>
//       </section>
//     )
//   }
// }

// export default ColorSelector
