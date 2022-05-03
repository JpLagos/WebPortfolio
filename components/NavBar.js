import React from 'react'
import { Link } from 'react-scroll';

const NavBar = () => {
  return (
    <div className='top-0 sticky backdrop-blur-md w-full h-full text-white py-4 z-10'>
        <div>
            <ul className='flex flex-row text-lg gap-10 text-center justify-center text-white cursor-pointer'>
                <li className='hover:scale-110 easy-in-out duration-300'>
                        <Link to="projects" smooth={true}>
                        Projects
                        </Link>
                </li>
                <li className='hover:scale-110 easy-in-out duration-300'>    
                        <Link to="tech" smooth={true}>
                        Technologies
                        </Link>

                </li>
                <li className='hover:scale-110 easy-in-out duration-300'>
                        <Link to="about" smooth={true}>
                        About Me
                        </Link>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default NavBar