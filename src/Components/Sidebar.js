import React from 'react'
import { useSelector } from 'react-redux'
const Sidebar = () => {


    const isMenuOpen = useSelector((store) =>store.app.isMenuOpen)
if(!isMenuOpen) return null
  return (
    <div className='pr-40 p-5  shadow-lg  overflow-y-scroll overflow-x-hidden cursor-pointer '>
        <ul className='w-96 flex flex-col gap-6 '>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Home</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Shorts</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Subscription</li>
            <hr class="h-px w-32  border-0 dark:bg-gray-400"/>

        </ul>
        <h1 className='w-96 font-bold'>You ></h1>

        <ul className='w-96 flex flex-col gap-6 mt-3'>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Your channel</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>History</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Playlists</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Your videos</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Watch later</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Liked videos</li>
            <hr class="h-px w-30  border-0 dark:bg-gray-400"/>

        </ul>
        <h1 className='font-bold'>Subscription</h1>

        <ul className='w-[300px] flex flex-col gap-6 mt-3'>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Akshay saini</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Chai aur code</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Sheryians</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Technical Suneja</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Roadside coder</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>JS cafe</li>
            <li className=' hover:bg-gray-200 hover:rounded-md'>Take you forward</li>
            <hr class="h-px w-30  border-0 dark:bg-gray-400"/>

        </ul>

        <h1 className='w-96 font-bold'>More from Youtube</h1>

<ul className='w-96 flex flex-col gap-6 mt-3 '>
    <li className=' hover:bg-gray-200 hover:rounded-md'>YouTube Premium</li>
    <li className=' hover:bg-gray-200 hover:rounded-md'>YouTube Studio</li>
    <li className=' hover:bg-gray-200 hover:rounded-md'>YouTube Music</li>
    <li className=' hover:bg-gray-200 hover:rounded-md'>YouTube Kids</li>

</ul>
    </div>
  )
}

export default Sidebar