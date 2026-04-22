import React, { useState } from 'react'

const Registration = () => {
    const [form ,setForm]=useState({
        username:"",
        password:"",
        email:"",
        phone:"",
        profile:"",
        bio:"",
    })
    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    
    console.log("form data submitted", form);

    alert(`username:${form.username} successfully registered!`);
  }
  return (
    <div className='border border-amber-50 rounded-2xl p-4'>
          <h2 className='font-bold'>Create Your Account</h2>
          <form action="" className='flex flex-col py-2 px-4 w-[400px] ' onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" className='outline:none border-amber-50 p-2 m-2 rounded-xl focus:outline focus:ring-2 focus:ring-mist-400'
              onChange={handleChange} name="username" value={form.username} required/>

            <label htmlFor="">Password</label>
            <input type="password" className='outline:none border-amber-50 p-2 m-2 rounded-xl focus:outline focus:ring-2 focus:ring-mist-400'
              onChange={handleChange} name="password" value={form.password} required />

              <label htmlFor="">Email</label>
            <input type="text" className='outline:none border-amber-50 p-2 m-2 rounded-xl focus:outline focus:ring-2 focus:ring-mist-400'
              onChange={handleChange} name="email" value={form.email} required />

              <label htmlFor="">Phone</label>
            <input type="text" className='outline:none border-amber-50 p-2 m-2 rounded-xl focus:outline focus:ring-2 focus:ring-mist-400'
              onChange={handleChange} name="phone" value={form.phone} required />


            <button type='submit' className=' bg-amber-50 rounded-2xl text-black p-2 mx-4 my-2'>Sign Up</button>
            
          </form>
          
          
        </div>
  )
}

export default Registration
