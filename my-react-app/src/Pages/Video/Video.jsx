import React from 'react'
import './Video.css'
import PlayVideo from '../../components/PlayVIdeo/PlayVideo'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId,categoryId} = useParams();
  return (
    <div>
      <div className="play-container">
        <PlayVideo videoId={videoId} categoryId={categoryId}/>
        <Recommended categoryId={categoryId}/>
        </div>
      
    </div>
  )
}

export default Video
 