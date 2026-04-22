import React, { useState } from 'react'
import Registration from './Registration';
const Auth = () => {
  const [forlogin,setForLogin]=useState(true);


  const [input, setInput] = useState({
    username: "",
    password: "",
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data submitted", input);

    alert(`username:${input.username} successfully logged in!`);
  }
  return (
    <div className='flex justify-center items-center  bg-mist-950 h-screen w-full'>
      <div className='h-screen flex flex-col justify-center items-center w-1/2 text-amber-50 border border-amber-50 rounded-2xl p-4'>
      <h1 className=' text-amber-50 text-5xl font-bold'>SpellTalk</h1>
        <h1 className='text-amber-50 font-bold text-3xl m-4'>Welcome to Our Page</h1>
       {forlogin &&(

      
        <div className='border border-amber-50 rounded-2xl p-4'>
          <h2 className='font-bold'>Login to Your Account</h2>
          <form action="" className='flex flex-col py-2 px-4 w-[400px] ' onSubmit={handleSubmit}>
            <label htmlFor="">Username</label>
            <input type="text" className='outline:none border-amber-50 p-2 m-2 rounded-xl focus:outline focus:ring-2 focus:ring-mist-400'
              onChange={handleChange} name="username" value={input.username} required />

            <label htmlFor="">Password</label>
            <input type="password" className='outline:none border-amber-50 p-2 m-2 rounded-xl focus:outline focus:ring-2 focus:ring-mist-400'
              onChange={handleChange} name="password" value={input.password} required />
            <button type='submit' className=' bg-amber-50 rounded-2xl text-black p-2 mx-4 my-2'>Login</button>
            <h3>Forget password</h3>
            <h3>Don't have an account ? Sign Up!</h3>
          </form>
          <div className='flex justify-between items-center m-2 p-2'>
            <button className='border p-2 rounded-xl border-amber-50'>Login with Google</button>
            <button className='border p-2 rounded-xl border-amber-50'>Login with Facebook</button>

          </div>
           <div className='flex justify-between m-2 p-2'>

          <h1 className='hover:text-blue-300'>Don't have an account? </h1>
          <button onClick={()=>setForLogin(!forlogin)} className='border rounded-2xl border-amber-50 p-2 hover:bg-amber-50 hover:text-black'>Sign Up </button>
          </div>
          
        </div>
         )}
        
          {!forlogin &&(
            <Registration/>

          )}
      </div>

    </div>
  )
}

export default Auth
