import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Contants/utils'
import { Video } from '../Video'

const VideoContainer = () => {
const [videos, setVideos] = useState([])
  const getVideos = async() =>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json =await data.json()
    setVideos(json.items)
    console.log(json.items);
  }
 useEffect(()=>{
   getVideos()
 },[])
  return (
    <div className='flex flex-wrap'>
    {videos.map(video =>   <Video key={video.id} info={video}/>)}
    </div>
  )
}

export default VideoContainer