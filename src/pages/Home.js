import React from 'react'
import Intro from '../components/Intro'
import Search from '../components/Search'
import Services from '../components/Services'
import Water from '../components/Water'

function Home() {
  return (
    <div>
      <Intro/>
      <Search/>
      <Services/>
      <br></br>
      <Water/>
    </div>
  )
}

export default Home
