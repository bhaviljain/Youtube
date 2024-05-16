import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../Contants/utils'
import { Advideo, Video } from '../Video'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
const [videos, setVideos] = useState([])
  const getVideos = async() =>{
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json =await data.json()
    setVideos(json.items)
    // console.log(json.items);
  }
 useEffect(()=>{
   getVideos()
 },[])
  return (
    <div className='flex flex-wrap'>
      {/* {videos[30] && <Advideo info={videos[30]} />} */}
    {videos && videos.map(video => 
      <Link key={video.id} to={"/watch?v="+ video.id} >  <Video key={video.id} info={video}/>
      </Link>
      )}
    </div>
  )
}

export default VideoContainer