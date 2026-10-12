import React from 'react'
import Chatwindow from './components/Chatwindow'
import Navbar from './components/Navbar'
import Chatinput from './components/Chatinput'
import MessageContext from './Context/MessageContext'

const App = () => {
  return (
    <div className=' max-h-screen flex  items-center justify-center'>
    <div className='w-1/2 mt-15 rounded-2xl overflow-hidden shadow shadow-gray-500 backdrop-blur-sm'>
        <Navbar />
        <Chatwindow/>
         <Chatinput/>
      </div>
  <img src="https://wallpapercave.com/wp/wp9276241.jpg" alt="" className=' z-[-1] w-screen fixed' />
  </div>
  )
}

export default App
