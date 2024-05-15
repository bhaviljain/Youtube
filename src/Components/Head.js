import React, { useEffect, useState } from 'react'
import { HamburgerMenu, YOUTUBE_SEARCH_API, userLogo } from '../Contants/utils'
import { youtubeLogo } from '../Contants/utils'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Redux/appSlice'
import { cacheResults } from '../Redux/SearchSlice'

const Head = () => {
    const [searchQuery , setSearchQuery] = useState('')
    const [suggestion , setSuggestion] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)
    const dispatch = useDispatch()
    const toggleMenuHamburger = () =>{
     dispatch(toggleMenu())
    }
 

   const searchCached = useSelector((store)=>store.search)

    const getSearchSuggestions = async() =>{
        const data =await fetch(YOUTUBE_SEARCH_API  + searchQuery)
        const res = await data.json()
        setSuggestion(res[1])
        console.log(res);
        dispatch(cacheResults(
            {
                [searchQuery] : res[1]
            }
        ))
    }

    useEffect(()=>{
       const timer = setTimeout(() => {

        if(searchCached[searchQuery])
            {
                setShowSuggestion(searchCached[searchQuery])
            }
            else{
                getSearchSuggestions()

            }
       }, 200);
       return()=>{
        clearTimeout(timer)
       }
    },[searchQuery])



    return (
        <>
       
      
        <div className='grid grid-flow-col p-1 pb-5 m-2 shadow-lg w-full '>
            <div className='flex col-span-1 cursor-pointer'>
                <img alt='menu' src={HamburgerMenu} className='h-6 m-2'
                onClick={()=>toggleMenuHamburger()}
                />
                 <a href='/'>
                <img  alt='menu' src={youtubeLogo} className='h-10 ml-2'
                
                />
                </a>
              
            </div>
            <div className='col-span-10 text-center mt-1.5 mr-9 cursor-pointer'>
                <input type='text' 
                placeholder='Please install Moesif CORS extension to make the search work'
                onFocus={()=>setShowSuggestion(true)}
                onBlur={()=>setShowSuggestion(false)}
                onChange={(e)=>setSearchQuery(e.target.value)}
                
                className=' border border-black  w-1/2 rounded-l-full py-1.5 hover:border-blue-600'
                value={searchQuery}
                />
                <button className='border border-black py-1.5 px-2 bg-gray-200 rounded-r-full'>🔍</button>
            </div>
            {showSuggestion && <div className='fixed left-[33%] w-[27rem] mt-12 bg-zinc-200 rounded-lg'>
                <ul className='flex flex-col gap-4 '>
                   {suggestion && suggestion.map((s)=>{
                    return(
                        <li className='hover:bg-gray-300 cursor-pointer'>🔍{s}</li>
                    )
                   })}
                   
                </ul>
            </div>}
            <div className='col-span-1 mt-1.5'>
                <img alt='userlogo' src={userLogo} className='h-9'/>
            </div>
        </div>
        </>
    )
}

export default Head 