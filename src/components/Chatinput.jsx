import React, {useState} from 'react'

const Chatinput = () => {
  const [text,setText] =  useState('')
  
  return (
    <div className=' '>
    <div className='h-15 text-white shadow-[0px_0px_45px_0px] rounded-4xl overflow-hidden  border-2 shadow-gray-500 m-4'>
    <div className='flex justify-center items-center   gap-2  ' >
      <textarea onChange={(e) => setText(e.target.value)}  name="" id="" placeholder='Type your text here....' value={text}  className='  mt-4 text-black  w-full ml-5 text-start  text-sm  resize-none outline-none'></textarea>
      <button onClick={() => console.log(text)} className='bg-gray-800 backdrop-blur-3xl text-white text-xs font-medium m-2 px-6 py-3 rounded-4xl cursor-pointer 
      active:bg-cyan-400 active:shadow'>Send</button>
    </div>
    </div>
    </div>
  )
}

export default Chatinput
