import React from 'react'
import moment from 'moment-timezone';
export const Video = ({info}) => {
    // console.log(info);
  return (
  <div className='p-2 m-2 ml-5 w-[280px] shadow-lg h-[95%]'>

  <img alt='thumbnails' src={info?.snippet?.thumbnails?.medium?.url}
className='rounded-lg hover:rounded-none'
/>
<ul>
    
        <li className='font-bold'>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount > 1000000 ?
         `${(info?.statistics?.viewCount / 1000000).toFixed(1)} M views` :
         `${Math.floor(info?.statistics?.viewCount /1000)} k views`
          }
        <span className='ml-2'> • {moment(info.snippet.publishedAt).fromNow()}</span>
        </li>
       
    
</ul>
  </div>



  )
}

export const Advideo = ({info}) =>{
  return (
    <div className='p-1 m-1 border-red-900'>
      <Video info={info}/>
      <h4 className='relative top-[-59px] ml-6 text-sm flex gap-3 font-bold'>Sponsored •
      <span className='font-normal'>Google Cloud</span>
      </h4>

      <button className='relative bottom-12 ml-5 p-1
       bg-blue-500 px-[82px] rounded-full opacity-50 hover:opacity-100'>
        <span className='opacity-100 font-extrabold'>Learn More  ↗️</span></button>
    </div>
  )
}
