import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Redux/appSlice'
import { useSearchParams } from 'react-router-dom'
import { GOOGLE_API_KEY, YOUTUBE_GET_VIDEO_BY_ID } from '../Contants/utils'
import moment from 'moment-timezone'
import CommentsContainer from './CommentsContainer'
import LiveChat from './LiveChat'

const WatchPage = () => {
  const [videoData, setVideoData] = useState(null);

  const [searchParams] = useSearchParams()
  console.log(searchParams.get("v"));


  const getVideoDetails = async () => {
    const data = await fetch(
      `${YOUTUBE_GET_VIDEO_BY_ID}${searchParams.get("v")}&key=${GOOGLE_API_KEY}`
    );
    const res = await data.json()
    // console.log(res.items[0]);
    setVideoData(res.items[0])
  }


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(closeMenu())
    getVideoDetails()
  }, [])






  return (
    <div className=" p-4 ">

      {!videoData ? (
        <div className="animate-ping"></div>
      ) : (
        <div className="flex flex-col">
          <div className='flex'>
          <iframe
          
            width={655}
            height={370}
            className="ml-8 rounded-2xl"
            src={`https://www.youtube.com/embed/${searchParams.get(
              "v"
            )}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className='w-4.5/12] ml-12'>
            <LiveChat />
          </div>
          </div>
          <div className="w-[65%] py-2 ml-8 text-lg mt-[-170px]">
            <ul>
              <li className='font-bold w-[84%]'> {videoData?.snippet?.title} </li>
              <li>
                <span className='flex gap-2 mt-5 font-normal'>
                  <img alt='thumbnails' 
                  src={videoData?.snippet?.thumbnails.medium.url}
                    className='h-10 w-10 rounded-full'
                  />
                  {videoData?.snippet?.channelTitle}
                  <button className='px-[4px] text-white rounded-3xl bg-black font-semibold text-xs ml-4'>Subscribe</button>

                  <button className='ml-4 bg-gray-100 rounded-full'><span>👍</span>{(videoData?.statistics?.likeCount / 1000).toFixed()}K | 👎</button>
                </span>
              </li>
              <li>{videoData?.statistics?.viewCount > 1000000 ?
                `${(videoData?.statistics?.viewCount / 1000000).toFixed(1)} M views` :
                `${Math.floor(videoData?.statistics?.viewCount / 1000)} k views`
              }
             
                <span className='ml-2'>  {moment(videoData.snippet.publishedAt).fromNow()}</span>
              </li>
           
              <li className=' bg-gray-200 np-7 whitespace-break-spaces
              w-[90%]
              '>{videoData?.snippet.description}</li>
            </ul>
          </div>
          <CommentsContainer />
        </div>
      )}


    </div>
  );
};


export default WatchPage