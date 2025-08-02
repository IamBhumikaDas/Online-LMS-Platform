import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70 '>
     <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold texr-gray-800 max-w-3xl mx-auto'>Empower your future with the courses designed to <span className='text-blue-600'>fit your choice</span><img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>
<p className=' md:block hidden text-gray-500 max-w-2xl mx-auto lh-2'>Your learning journey should be as unique as you are. That’s why our courses are carefully crafted to match your interests, career goals, and learning style. Whether you're looking to upskill, switch careers, or explore a new passion, you can choose what to learn, </p>
   <p className='md:hidden text-gray-500 max-w-sm mx-auto'>when to learn, and how to learn it. With flexible options, expert guidance, and real-world relevance, you’re not just taking a course—you’re taking a step toward a brighter, more empowered future.</p>
  <SearchBar />
   
    </div>
  )
}

export default Hero
