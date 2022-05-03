import React from 'react'
import ProgressBar from './ProgressBar'

const Technologies = () => {
  return (
    <div id="tech">
        <div className='max-w-lg md:max-w-4xl flex flex-col justify-center my-2 p-5 text-center gap-5 md:mx-auto'>
        <span className='text-4xl text-white font-bold mx-5 mt-12 md:text-left' >Technologies</span>
            
            <ProgressBar tech="HTML" width="w-4/5" level="Advanced"/>
            <ProgressBar tech="CSS, Bootstrap &#38; tailwind" width="w-4/5" level="Advanced"/>
            <ProgressBar tech="JavaScript" width="w-1/2" level="Regular"/>
            <ProgressBar tech="React" width="w-1/2" level="Regular"/>
            <ProgressBar tech="NextJs" width="w-1/2" level="Regular"/>
            <ProgressBar tech="python" width="w-1/4" level="Beginner"/>
            
        </div>
        <div className='my-20 w-full flex justify-center flex-col md:max-w-4xl  mx-auto'>
            <span className='text-4xl text-white font-bold m-5 text-center md:text-left'> Aditional skills</span>
            <div className='flex justify-center md:justify-around flex-row gap-10 mt-10 '>
                <ul className='list-disc text-xl font-thin text-white'>
                    <li>Git</li>
                    <li>GitHub</li>
                    <li>Wordpress</li>
                    <li>firebase</li>
                    <li>supabase</li>
                </ul>
                <ul className='list-disc text-xl font-thin text-white'>
                    <li>QuickLearning</li>
                    <li>TeamWork</li>
                    <li>Engagement</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Technologies