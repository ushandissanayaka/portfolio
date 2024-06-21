import React from 'react'

function intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white'>Hi, I am</h1>
        <h1 className='text-7xl text-secondary font-semibold'>Ushan Pramod </h1>
        <h1 className='text-5xl text-white font-semibold'>I am fullstack developer</h1>
        <p className='text-white w-2/3'>I am an undergraduate student at the University of Moratuwa,
     
              I am passionate about coding, problem-solving, and continuously learning new technologies to stay
                updated in the ever-evolving field of web development.
                
                </p>

                <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">Get Started</button>
      
    </div>
  )
}

export default intro
