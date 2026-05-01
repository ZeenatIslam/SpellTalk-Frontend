import React, { useState } from 'react'
import Registration from './Registration'
import BackgroundDonuts from './BackgroundDonuts'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
const Auth = () => {
  const navigate = useNavigate()
  const [forlogin, setForLogin] = useState(true)

  const [input, setInput] = useState({
    email: "",
    password: "",
  })
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  const handleChange = (e) => {
    const { name, value } = e.target
    setInput({
      ...input,
      [name]: value,
    })
  }

  const handleSubmit =async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("");
   
    try{
      const res=await axios.post("http://www.localhost:5000/api/auth/login",input);
      navigate("/webapp");
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);
    }catch(error){
    setError(error.response?.data?.msg ||"error logging in");
  }finally{
    setLoading(false);
  }
  }

  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">

      {/* 🔥 BACKGROUND (no z-index here) */}
      <BackgroundDonuts />

      {/* 🔥 CONTENT */}
      <div className="relative z-10 flex justify-center items-center h-full">

        <div className="w-[420px] text-white border border-white/20 rounded-2xl p-6 bg-white/10 backdrop-blur-xl">

          <h1 className="text-4xl font-bold text-center mb-4">SpellTalk</h1>
          <h2 className="text-center mb-6">Welcome Back 👋</h2>

          {forlogin ? (
            <>
              <h3 className="text-lg font-semibold mb-2">Login to Your Account</h3>

              <form onSubmit={handleSubmit} className="flex flex-col">

                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  onChange={handleChange}
                  className="p-2 my-2 rounded-xl bg-transparent border border-white/30 outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />

                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  onChange={handleChange}
                  className="p-2 my-2 rounded-xl bg-transparent border border-white/30 outline-none focus:ring-2 focus:ring-purple-400"
                  required
                />

                <button className="bg-white text-black rounded-xl p-2 mt-4 hover:bg-gray-200 transition">
                  Login
                </button>
              </form>

              <div className="flex justify-between mt-4 text-sm">
                <span className="cursor-pointer hover:text-blue-300">
                  Forgot password?
                </span>
              </div>

              <div className="flex justify-between items-center mt-6">
                <span>Don't have an account?</span>
                <button
                  onClick={() => setForLogin(false)}
                  className="border border-white px-3 py-1 rounded-xl hover:bg-white hover:text-black transition"
                >
                  Sign Up
                </button>
              </div>
            </>
          ) : (
            <Registration />
          )}

        </div>

      </div>
    </div>
  )
}

export default Auth