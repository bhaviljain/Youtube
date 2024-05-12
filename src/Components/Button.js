import React from 'react'
import { Buttonn } from './Buttonn'

export const Button = () => {
  const list = ["All", "TarakMehta","Javascript","Website","Games","Discipline","Workout","Roadmaps","Cooking","Music","Live", "Cricket","News","Travel" ]
  return (
    <div className='flex p-2'>
      {list.map((items)=>{
        return(
          <div>
           <Buttonn name={items}/>
            </div>
        )
      })}
    </div>
  )
}
