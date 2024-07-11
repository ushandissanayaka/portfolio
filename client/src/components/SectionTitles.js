import React from 'react'

function SectionTitles({title}) {
    
  return (
    <div className='flex gap-10 items-center py-10'>
    <h1 className='text-3xl text-secondary font-semibold'>{title}</h1>
    <div className='w-60 h-[1px] bg-secondary'></div>
    </div>
  )
}

export default SectionTitles
