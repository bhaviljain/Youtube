import React from 'react'
import { HamburgerMenu, userLogo } from '../Contants/utils'
import { youtubeLogo } from '../Contants/utils'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../Redux/appSlice'
const Head = () => {
  
    const dispatch = useDispatch()
    const toggleMenuHamburger = () =>{
     dispatch(toggleMenu())
    }
    return (
        <div className='grid grid-flow-col p-1 pb-8 m-2 shadow-lg w-full '>
            <div className='flex col-span-1 cursor-pointer'>
                <img alt='menu' src={HamburgerMenu} className='h-6 m-2'
                onClick={()=>toggleMenuHamburger()}
                />
                
                <img alt='menu' src={youtubeLogo} className='h-10 ml-2'/>
            </div>
            <div className='col-span-10 text-center mt-1.5 mr-9 cursor-pointer'>
                <input type='text' className=' border border-black  w-1/2 rounded-l-full py-1.5 hover:border-blue-600'/>
                <button className='border border-black py-1.5 px-2 bg-gray-200 rounded-r-full'>🔍</button>
            </div>
            <div className='col-span-1 mt-1.5'>
                <img src={userLogo} className='h-9'/>
            </div>
        </div>
    )
}

export default Head 