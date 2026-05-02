import React, { useState } from 'react'
import axios from "axios";
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
  const handleSubmit = async(e) => {

    e.preventDefault();
    
    console.log("form data submitted", form);
    try{
      const res=await axios.post("https://spelltalk-backend.onrender.com/api/auth/register",form);
      alert(`username:${form.username} successfully registered!`);
    }catch(error){
      console.log(error);
    }

  }
  return (
    <div className='border border-amber-50 rounded-2xl p-4'>
          <h2 className='font-bold'>Create Your Account</h2>
          <form action="" className='flex flex-col  ' onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" className="p-2 my-2 rounded-xl bg-transparent border border-white/30 outline-none focus:ring-2 focus:ring-purple-400"
                 onChange={handleChange} name="username" value={form.username} required/>

            <label htmlFor="">Password</label>
            <input type="password" className="p-2 my-2 rounded-xl bg-transparent border border-white/30 outline-none focus:ring-2 focus:ring-purple-400"
                  onChange={handleChange} name="password" value={form.password} required />

              <label htmlFor="">Email</label>
            <input type="text"className="p-2 my-2 rounded-xl bg-transparent border border-white/30 outline-none focus:ring-2 focus:ring-purple-400"
                  onChange={handleChange} name="email" value={form.email} required />

              <label htmlFor="">Phone</label>
            <input type="text" className="p-2 my-2 rounded-xl bg-transparent border border-white/30 outline-none focus:ring-2 focus:ring-purple-400"
                  onChange={handleChange} name="phone" value={form.phone} required />


            <button type='submit' className=' bg-amber-50 rounded-2xl text-black p-2 mx-4 my-2 ml-2'>Sign Up</button>
            
          </form>
          
          
        </div>
  )
}

export default Registration
