import React from 'react'
import Header from '../../components/Header'
import Intro from './Intro'
import About from './About'
import Experences from './Experences'


function Home() {
  return (
    <div >
      <Header/>
      <div className='bg-primary px-40'>
        <Intro/>
        <About />
        <Experences />
      </div>
    </div>
  )
}

export default Home
