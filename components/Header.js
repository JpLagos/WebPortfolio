import React from 'react'
import { Link } from 'react-scroll';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='mx-auto'>
        <div className='flex flex-col mt-14 text-white text-center p-2 gap-5 h-screen'>
          <div>

            <Image className='rounded-full self-center max-w-xs z-0'
            src="/me.jpg"
            alt="Juan Lagos Dev"
            width={350}
            height={350}
            >  
            </Image>
      </div>
            <h1 className='text-6xl font-light animate-pulse flex justify-center'>Juan Lagos
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather self-center feather-code">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </h1>

            <span className='text-lg text-slate-400'>Front end Developer</span>
            <button className='bg-bliss hover:bg-white text-white hover:text-bliss font-bold py-2 px-4 rounded-full w-2/6 md:w-1/6 self-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
              <Link to="contact" smooth={true}>
                          Contact me!
              </Link>
            </button>

        </div>
    </div>
  )
}

export default Header