import React from 'react';

function Intro() {
  return (
   <div className='flex gap-0 sm:flex-col'>
    
     <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-5 py-10 '>
      
      <h1 className='text-white '>Hi, I am</h1>
      <h1 className='text-6xl sm:text-3xl text-secondary font-semibold '>Ushan Pramod</h1>
      <h1 className='text-5xl sm:text-3xl  text-white font-semibold'>I am a fullstack developer</h1>
      

      <p className='text-white w-2/4'>
        I am an undergraduate student at the University of Moratuwa,
        passionate about coding, problem-solving, and continuously learning new technologies to stay
        updated in the ever-evolving field of web development.
      </p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded">Get Started</button>
    </div>
    <img  src='/ushan.jpeg' alt='' className="h-60 w-70 rounded-5px mt-20 rounded-full"/>

   </div>
        
     
  );
}

export default Intro;
