import React from 'react'
import GridItem from './GridItem'

const Projects = () => {
  return (
    <div className='flex justify-center flex-col mt-10 p-4 md:max-w-4xl md:mx-auto' id="projects">
        <span className='text-4xl text-white font-bold mx-5 mt-12 mb-2 text-center md:text-left'>Some Projects</span>
        <span className='text-white mx-5 my-2 text-center'>All code on my <a className="underline" href="https://github.com/JpLagos" target="_blank">GitHub Repo</a></span>
        <div className='grid grid-cols-2 gap-5 text-white'>     
            <GridItem src="/PhotoPorfolio.png" alt="PhotoGraphy portfolio" title="Photography Portfolio" description="A minimalist photography portfolio made with next.js tailwindcss and supabase" url="https://photo-portfolio-wine.vercel.app/"/>
            <GridItem src="/GifSearcher.png" alt="Gif Searcher" title="Gif Searcher App" description="A gif searcher made with React Tailwindcss and Giphy Api" url="https://gif-searcher-livid.vercel.app/" />
            {/* <GridItem src="/image.jpg" alt="image example" title="item title" description="hello world" />
            <GridItem src="/image.jpg" alt="image example" title="item title" description="hello world" /> */}
        </div>
    </div>
  )
}

export default Projects