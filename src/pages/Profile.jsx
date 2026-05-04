import React, { useState } from 'react'
import axios from 'axios'

const Profile = (isopen) => {
  const [userInfo,setUserInfo]=useState(null);

  const fetch=async()=>{
   
  }
  const updatefun=async()=>{
    const update=await axios.push();

  }
  return (
    <div className='fixed top-0 left-16 h-full bg-white z-50 shadow-2xl transition-transform duration-300 translate-x-0'>
      <div>
        <h1 className='px-20 py-10  text-black text-3xl'>Profile</h1>
      </div>
      <div className=' flex items-center justify-center'>
      <img src="noUser.jpg" alt="" className='h-35 w-35 rounded-full' />
      </div>
        
      <div className=' flex-1 '>

<div className='px-20 py-10 m-2'>
  
      <h1 className='my-2'>Username</h1>
      <h1 className='my-2'>Name</h1>
</div>
<div className='px-20 py-10 m-2'>

      <h1 className='my-2'>Phone:</h1>
      <h1 className='my-2'>Bio:</h1>
</div>
      </div>
      
    </div>
  )
}

export default Profile
