import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const CalltoAction = () => {
  const {navigate} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Lear anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>With online tools and resources, learning is now flexible and accessible. <br /> You can study new skills or topics anytime, from anywhere—at your own pace.</p>
    <div className='flex items-center font-medium gap-6 mt-4'>
      <button onClick={()=> {navigate('/course-list'), scrollTo(0,0)}} className='px-10 py-3 rounded-md text-white bg-blue-600'>Get started</button>
       <button className='flex items-center gap-2'>Learn More <img src={assets.arrow_icon} alt="arro" /></button>
    </div>
    </div>
  )
}

export default CalltoAction
