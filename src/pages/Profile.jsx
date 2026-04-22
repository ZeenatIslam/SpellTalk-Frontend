import React from 'react'

const Profile = () => {
  return (
    <div className='flex flex-col h-screen w-1/3 bg-yellow-50 '>
      <div>
        <h1 className='px-20 py-10  text-black text-3xl'>Profile</h1>
      </div>
      <div className=' flex items-center justify-center'>
      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" alt="" className='h-35 w-35 rounded-full' />
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
