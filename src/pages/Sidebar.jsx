import React from 'react'
import { Avatar, AvatarFallback ,AvatarImage} from '@/components/ui/avatar'
const Sidebar = () => {
    const users = [
        {
            id: 1,
            name: "Harry Potter",
            dp: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        },
        {
            id: 2,
            name: "Hermione Granger",
            dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        },
        {
            id: 3,
            name: "Ron Weasley",
            dp: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        },
        {
            id: 4,
            name: "Luna Lovegood",
            dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        },
        {
            id: 5,
            name: "Draco Malfoy",
            dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        },
    ];

    return (
        <section className='bg-mist-950 w-89 h-screen'>
            <div className=''>
                {/**Heading */}
                <div className='h-20'>
                    {/*name*/}
                    <div>
                    </div>
                    {/**search bar */}
                </div>

                <div className='bg-white h-screen rounded-t-4xl border-2 px-2  '>

                    <h2 className='font-bold px-4 py-2'>Recent Chat</h2>
                    {users.map((user) => {
                        return (
                            <div key={user.id} className='flex  items-center gap-3 p-2 hover:bg-gray-100'>
                                <Avatar className="w-12 h-12">
                                    <AvatarImage src={user.dp} className='border border-gray-500'/>
                                    <AvatarFallback>
                                        {user.dp}
                                    </AvatarFallback>
                                </Avatar>
                                <div className='flex flex-col'>

                                <span className='font-medium'>{user.name}</span>
                                <p>Hello</p>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </section>
    )
}

export default Sidebar
