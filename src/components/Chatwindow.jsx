import React from 'react'
import Message from './Message'


const Chatwindow = () => {
  return (
    <div className='h-100  overflow-auto scrollbar-none p-3 rounded-xl'>
     <div>
     <Message/>
     </div>
    </div>
  )
}

export default Chatwindow
