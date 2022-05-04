import React from 'react'
import Image from 'next/image';


const AboutMe = () => {
  return (
    <div id="about">
        <div className='flex flex-col md:max-w-4xl md:mx-auto'>
            <span className='text-4xl text-white font-bold text-center md:text-left mt-16 mx-5'>About me</span>
            <div className='flex items-center justify-center m-5'>
              <Image className='rounded-full mx-auto'
                src="/about.jpg"
                alt="about me"
                layout="fixed"
                width={350}
                height={350}>  
              </Image>
            </div>
            <span className='mx-5 text-white py-2'>Hello there, my name is Juan Pablo Lagos, a 23 years old Junior Front End developer. Learning how many things can be done with web development and pushing myself to discover new things and technologies day by day.</span>
            <span className='mx-5 text-white py-2'>If you are reading this i hope we can work together, Just Contact me and i will have a look up for you asap!.</span>
            <span className='mx-5 text-white py-2'>Anyway, Thanks for reading. If i have bored you, <a href="https://benevolent-dieffenbachia-a98e11.netlify.app/" target="_blank" className='underline text-white cursor-pointer' rel="noopener noreferrer">click here and let&apos;s fix it!.</a></span>
        </div>
    </div>
  )
}

export default AboutMe