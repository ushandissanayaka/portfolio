import React from 'react'
import SectionTitles from '../../components/SectionTitles'

function About() {

  //array
const skills = [
  "javascript",
  "Node",
  "Express",
  "React",
  "MongoDB",
  "Cloudinary"
]


  return (
    <div className='w-100%'>
      <SectionTitles title="About" />
      <div className='flex w-full items-center'>
        <div className="h-[50vh] ">
        <lottie-player src="https://lottie.host/71e803b5-bbb5-4cb7-a29a-3ae0d59e9865/gpL65AAIUC.json"
         background="##FFFFFF" speed="1" 
          loop controls autoplay direction="1" 
          mode="normal"></lottie-player>
        </div>
        <div className='flex flex-col gap-5 w-2/3  '>
         <p className='text-white'>
          I am an undergraduate student at the University of Moratuwa, 
          pursuing a degree in Information Technology. With a keen interest in web development,
           I specialize in creating dynamic and user-friendly websites. My skills include HTML,
            CSS, JavaScript, and various web frameworks. I am passionate about leveraging technology 
            to solve real-world problems and continuously learning new techniques to enhance my development
             capabilities.
             </p>
        </div>
      </div>

      
        <div className='py-5'>
          <h1 className='text-tertiary text-2xl'>
            Here are a few technologies i've been working with recently:
          </h1>
          <div className='flex flex-wrap gap-10 mt-5'>

          {skills.map((skill, index) =>(
            <div className='border border-tertiary py-3 px-6'>
               <h1 className='text-tertiary'>{skill}</h1>
            </div>
          ))}
          </div>
        </div>
      
    </div>
  )
}

export default About
