import React from 'react'
import SectionTitles from '../../components/SectionTitles'
import { projects } from '../../resources/projectsD'

function Projects() {

    const [selectedItemIndex, setSelectedItemIndex ] = React.useState(0)
  return (
    <div>
      <SectionTitles title="Projects" />
      <div className="flex py-10 gap-10 sm:flex-col"> 

     <div className="flex flex-col gap-20 border-l-2 border-[#135e4c82] w-2/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
        { projects.map(( projects, index) => (
            <div onClick={() =>{
                setSelectedItemIndex(index);

            }} className='cursor-pointer'>
                <h1 className={`text-xl  px-5 
                    ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#0e0e63fc] py-3 ' : 'text-white' }` }>{projects.title}</h1>
            </div>
        ))

        }

     </div>


     <div className="flex items-center justify-center gap-10 sm:flex-col">
        <img  src={projects[selectedItemIndex].image} alt='' className="h-60 w-72"/>
     <div className="flex flex-col gap-5">
         <h1 className="text-secondary text-xl ">{projects[selectedItemIndex].title}</h1>
        <p className="text-white">{projects[selectedItemIndex].description}</p>
         <p className="text-white">A full-stack developer is a versatile professional skilled in both front-end and back-end development.
             . Full-stack 
              developers collaborate with cross-functional teams to deliver high-quality, scalable, and secure
               web solutions.</p>

     </div>

     </div>

    </div>

    </div>
  )
}

export default Projects
