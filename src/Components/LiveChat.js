import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Redux/ChatSlice'
import ChatMessage from './ChatMessage'
import { generateRandomName, generateRandomText } from '../Contants/Helper'

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState()
    const chatMessage = useSelector((Msg)=>Msg.chat.messages)
const dispatch = useDispatch()
useEffect(()=>{
    const i = setInterval(()=>{
     dispatch(addMessage({
        name:generateRandomName(),
        message:generateRandomText(20)
     }))
    },1500)
    return() =>clearInterval(i)
})

 

  return (
    <>    
    <h3 className='w-[100%] border-b  border-black relative ml-4 text-center top-7 rounded-t-xl bg-black z-0 text-white'>Top Live Chat </h3>
   
    <div className='w-full h-[480px] ml-4 pt-6 border-4 border-black 
    rounded-t-xl overflow-y-scroll flex flex-col-reverse overflow-x-hidden'>

   {chatMessage.map((c,index)=>(
    <ChatMessage  key={index} name={c.name} message={c.message}
    />
   ))}
  
    </div>
    <form
        className="w-full p-2 ml-4 border border-black rounded-b-xl"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({
            name:"Bhavil Jain",
            message:LiveMessage
          }))
         setLiveMessage("")
        }}
      >
        <input
          className="px-2 w-96
          border border-black rounded-full
          "
          type="text"
          value={LiveMessage}
          onChange={(e)=>setLiveMessage(e.target.value)}
          
        />
        <button className=" hover:bg-gray-300 hover:rounded-full mx-2 px-2 py-1">➤</button>
      </form>
    </>
  ) 
}

export default LiveChat