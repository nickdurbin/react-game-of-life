import React from 'react'
import Canvas from '../components/Canvas/Canvas'
import SidePanel from '../components/SidePanel/SidePanel'
import './home.scss'

function Home() {
  return (
    <div className='home-wrapper'>
      <SidePanel />
      <Canvas />
    </div>
  )
}

export default Home
