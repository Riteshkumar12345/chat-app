import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightContainer from '../components/RightContainer'

const HomePage = () => {

  const[selcetedUser, setSelectedUser] = useState(false)
  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
      <div className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden
      h-[100%] grid grid-cols-1 relative ${selcetedUser ? 'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_2fr]'
    :'md:grid-cols-2'}`}>
        <Sidebar selcetedUser={selcetedUser} setSelectedUser={setSelectedUser}/>
        <ChatContainer selcetedUser={selcetedUser} setSelectedUser={setSelectedUser} />
        <RightContainer selcetedUser={selcetedUser} setSelectedUser={setSelectedUser}/>
      </div>
    </div>
  )
}

export default HomePage
