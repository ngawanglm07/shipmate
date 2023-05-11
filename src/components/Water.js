import React from 'react'
import '../components/water.css'
import Wave from "react-wavify"

function Water() {
  return (

  <div className='wave'>
  <div className='wave-box'>
  <Wave fill='#6f57e9'
        paused={false}
        options={{
          height: 10,
          amplitude: 30,
          speed: 0.20,
          points: 4
        }}
  />
  </div>
  <div className='wave-box2'>
  <Wave fill='#751aff'
        paused={false}
        options={{
          height: 20,
          amplitude: 50,
          speed: 0.30,
          points: 4
        }}
  />
  </div>

  </div>

     
  )
}

export default Water
