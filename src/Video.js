import React from 'react'

export const Video = ({info}) => {
    console.log(info);
  return (
  <div className='p-2 m-2 w-[20%] shadow-lg'>
    <img src={info?.snippet?.thumbnails?.
medium?.url}
className='rounded-lg hover:rounded-none'
/>
<ul>
    
        <li className='font-bold'>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount > 1000000 ?
         `${(info?.statistics?.viewCount / 1000000).toFixed(1)} M views` :
         `${Math.floor(info?.statistics?.viewCount /1000)} k views`
          }
        </li>
    
</ul>
  </div>
  )
}
