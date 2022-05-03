import React from 'react'

const ProgressBar = ({tech, width, level}) => {
  return (
    <div className='flex flex-col'>
        <span className='text-slate-200 font-bold'>{tech}</span>
        <span className='text-slate-200 text-sm font-thin'>{level}</span>
        <div className={"mx-auto w-3/4 md:w-full bg-darkBlue rounded-full"}>
            <div className={`bg-gradient-to-r from-purple to-bliss text-xs font-medium text-blue-100 text-center p-0.5 leading-none ${width} rounded-l-full rounded-r-full w-4/5 h-2`}></div>
            </div>
        </div>
  )
}

export default ProgressBar