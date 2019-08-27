import React, { useState } from 'react'

const ColorSelectorHooks = () => {
  // Change Hue
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  // Change Saturation
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  // Change Lightness
  const [lightness, setLightness] = useState(50)

  // Make Random Color
  const RandomColorHooks = () => {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLightness(Math.floor(Math.random() * 100))
    console.log('Random Color Selected')
  }
  return (
    <section>
      <div className="results-area">
        <p
          className="color-results"
          style={{
            backgroundColor: `hsl(${hue},${saturation}% ,${lightness}%)`
          }}
        />
      </div>
      <div className="color-sliders">
        <div className="unicorn">
          <h3>Hue</h3>
          <input
            className="hue"
            type="range"
            min="1"
            max="360"
            value={hue}
            onChange={e => {
              setHue(e.target.value)
            }}
          />
        </div>
        <div className="unicorn">
          <h3>Saturation</h3>
          <input
            className="saturation"
            type="range"
            value={saturation}
            onChange={e => {
              setSaturation(e.target.value)
            }}
          />
        </div>
        <div className="unicorn">
          <h3>Lightness</h3>
          <input
            className="lightness"
            type="range"
            value={lightness}
            onChange={e => {
              setLightness(e.target.value)
            }}
          />
        </div>
        <h3 className="values">
          {`hsl(${hue},${saturation}% ,${lightness}%)`}
        </h3>
        <button className="hover" onClick={RandomColorHooks}>
          Get A Random Color
        </button>
      </div>
    </section>
  )
}

export default ColorSelectorHooks
