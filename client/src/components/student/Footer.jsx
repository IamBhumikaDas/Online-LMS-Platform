import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>
<div className='flex flex-col md:flex-row items-center px-8 md:px-0 justify-center gap-10 md:gap-32 pt-0 pb-5 border-b border-white/30'>
<div className='flex flex-col md:items-start items-center w-full '>
  <img className='h-24 md:h-28' src={assets.logo_dark} alt="logo" />

<p className='mt-0 text-center md:text-left text-sm text-white/80'>Edemy is your go-to platform for flexible, expert-led online learning. Whether you're a student, professional, or curious learner, our courses are designed to help you build skills, achieve goals, and grow at your own pace. Anytime, anywhere—unlock your potential with Edemy.

</p>
</div>
<div className='flex flex-col md:items-start items-center w-full'>
  <h2 className='font-semibold text-white mb-5'>Company</h2>
  <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2 '>
    <li><a href="/">Home</a></li>
     <li><a href="/course-list">All Courses</a></li>
      <li><a href="https://www.linkedin.com/in/bhumika-das-07abb926a/">Linkdin</a></li>
       <li><a href="GitHub.com/IamBhumikaDas">GitHub</a></li>
       
  </ul>
</div>
<div className='hidden md:flex flex-col items-start w-full'>
  <h2 className='font-semibold text-white mb-5'>Subscribe to our newsletter</h2>
  <p className='text-sm text-white/80'>Stay updated with the latest courses, tips, and offers—delivered straight to your inbox.</p>
  <div className='flex items-center gap-2 pt-4'>
    <input className='border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm' type="email" placeholder='Enter your email' />
    <button className='bg-blue-600 w-24 h-9 text-white rounded '>Subscribe</button>
  </div>
</div>
</div>
<p className='py-4 text-center text-xs md:text-sm text-white/60 '>Copyright © 2025 (Admin - Bhumika Das).</p>

    </footer>
  )
}

export default Footer
