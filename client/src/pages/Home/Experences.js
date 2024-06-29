import React from 'react'
import SectionTitles from '../../components/SectionTitles'
import { experences  } from '../../resources/experences'

function Experences() {

    const [selectedItemIndex, setSelectedItemIndex ] = React.useState(0)

  return (
    <div>
    <SectionTitles title="Experences" />

    <div className="flex py-10 gap-10 sm:flex-col"> 

     <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-2/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
        {experences.map((experence, index) => (
            <div onClick={() =>{
                setSelectedItemIndex(index);

            }} className='cursor-pointer'>
                <h1 className={`text-xl  px-5 
                    ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#0e0e63fc] py-3 ' : 'text-white' }` }>{experence.period}</h1>
            </div>
        ))

        }

     </div>


     <div className="flex flex-col gap-5">
         <h1 className="text-secondary text-xl ">{experences[selectedItemIndex].title}</h1>
         <h1 className="text-secondary text-xl ">{experences[selectedItemIndex].company}</h1>
         <p className="text-white">A full-stack developer is a versatile professional skilled in both front-end and back-end development.
             . Full-stack 
              developers collaborate with cross-functional teams to deliver high-quality, scalable, and secure
               web solutions.</p>

     </div>

    </div>
    </div>
  )
}

export default Experences
