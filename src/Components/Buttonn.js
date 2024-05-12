import React from 'react'

export const Buttonn = ({name}) => {
  return (
   <button className='px-5 bg-gray-200 rounded-xl py-2 m-2 
   w-"100%"
   hover:rounded-none hover:bg-gray-300'>{name}</button>
  )
}
