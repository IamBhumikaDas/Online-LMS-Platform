import React, { useContext } from 'react'
import {assets} from '../../assets/assets'
import{ Link} from 'react-router-dom'
import { useClerk } from '@clerk/clerk-react'
import { UserButton } from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'


const Navbar = () => {

  const {navigate, isEducator} = useContext(AppContext)

  const isCourseListPage = location.pathname.includes('/course-list')

  const {openSignIn} = useClerk()
  const {user} =useUser()

  return (
    <div className={`flex h-20 md:h-24 items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-0  ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}` }>
    <img className='w-28 lg:w-36 h-24 md:h-28 cursor-pointer' src={assets.logo} alt="logo" onClick={()=>{ navigate('/'), scrollTo(0,0)}} />
    <div className='hidden md:flex items-center gap-5 text-gray-500'>
<div className='flex items-center gap-5 '>
 { 
  user && <>

  <button onClick={()=>{navigate('/course-list')}}>{isEducator? 'Educator Dashboard' : 'Dashboard'}</button> |
  <Link to='/my-enrollments'>My Enrollments</Link>

  </>
}
</div>
{
  user ? <UserButton/> :
  
  <button onClick={()=> openSignIn()} className='bg-blue-600 text-white px-5 py-2 rounded-full'>Create Account</button>}
    </div>
    {/* For phone screen */}
    <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500 '>
      <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs '>
        { 
  user && <>
<button onClick={()=>{navigate('/educator')}}>{isEducator? 'Educator Dashboard' : 'Become Educator'}</button>
|
  <Link to='/my-enrollments'>My Enrollments</Link>

  </>
}
      </div>
{
  user ? <UserButton/> :

  <button onClick={()=> openSignIn()}><img src={assets.user_icon} alt="" /></button>}
    </div>
    </div>
  )
}

export default Navbar
