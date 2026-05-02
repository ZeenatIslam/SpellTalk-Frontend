import React,{useContext,useEffect,useState} from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import StorySection from './StorySection'
import {ChatContext} from "../context/ChatContext"
import axios from 'axios'
const Sidebar = () => {
     const { setSelectedUser } = useContext(ChatContext);
     const [user,setUser]=useState([]);

     const fetchAllUser=async()=>{
        try{
            const res=await axios.get("https://spelltalk-backend.onrender.com/api/auth/users");
            setUser(res.data.usersData);
            console.log("user data",res.data.usersData);

        }catch(error){
            console.log("server error");
        }
     }
     useEffect(()=>{
        fetchAllUser();


     },[])
    
    return (
        <section className='bg-mist-950 w-[500px] h-screen overflow-y-auto hide-scrollbar'>
            <div className=''>
                <div className='h-50 m-2'>
                    

                    <h2 className='text-amber-50 font-light px-4 text-xs'>Welcome Oji</h2>
                    <h1 className='text-amber-50 px-4 font-bold text-3xl'>SpellTalk</h1>
                    
                    <div className='text-amber-50 flex justify-between m-2 p-2'>
                        <h2 className=''>Story</h2>
                        <h3 className='text-white/50 text-xs'>See All</h3>
                    </div>
                    <div className='flex  items-center cursor-pointer text-white gap-4 overflow-x-auto hide-scrollbar m-4'>
                        <div className='flex flex-col items-center'>
                            {/**Add my story */}
                            <div className='p-[2px] rounded-full bg-gradient-to-tr from bg-yellow-50 to bg-pink-300 w-11 '>

                                <div className='w-10 h-10 rounded-full border-2 border-black text-black object flex '></div>

                            </div>
                            <span className='text-xs font-extralight mt-1'>
                                <h3 className='text-yellow-50 text-xs font-light'>Add</h3>
                                <h3 className='text-yellow-50 font-bold'>Story</h3>
                            </span>
                        </div>
                        {/**Other users stories */}
                        {
                            user.map((user) => {
                                return (
                                    <StorySection key={user._id} user={user} />
                                )
                            })
                        }
                    </div>



                    <div>
                    </div>
                    {/**search bar */}
                </div>

                <div className='bg-white h-screen rounded-t-4xl border-2 px-2  '>

                    <h2 className='font-bold px-4 py-2'>Recent Chat</h2>
                    <div className=''>

                        {user.map((user) => {
                            return (
                                <div key={user._id} className='flex  items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer text-black'   
                                onClick={() => { 
                                setSelectedUser(user)} }>
                                    <Avatar className="w-12 h-12">
                                        
                                      
                                        <AvatarImage  src="noUser.jpg" className='border border-gray-500' />
                                         
                                        <AvatarFallback>
                                            No Dp
                                        </AvatarFallback>
                                           
                                    </Avatar>
                                    <div className='flex flex-col'>

                                        <span className='font-medium'>{user.username}</span>
                                        <p>{user.email}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Sidebar
