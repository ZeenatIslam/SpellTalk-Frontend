import React from 'react'

const StorySection = ({user}) => {
    const {username}=user;

  return (
    <div className=''>
        <div className='p-[2px] rounded-full bg-gradient-to-tr from bg-yellow-50 to bg-pink-300 w-11 '>
            <img src="noUser.jpg" alt={name} className='w-10 h-10 rounded-full border-2 border-black object'/>


        </div>
        <span className='text-xs font-extralight'>
            {username.split(' ')[0].slice(0,5)}
        </span>
      
    </div>
  )
}

export default StorySection
