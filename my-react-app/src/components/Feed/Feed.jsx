import React, { useEffect, useState } from 'react'
import './Feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'
import { value_converter } from '../../data'
import { time_ago } from '../../data'

const Feed = ({category}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async() => {
    try {
      setLoading(true);
      setError(null);
      
      const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
      
      const response = await fetch(videoList_url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      
      if (result.error) {
        throw new Error(result.error.message);
      }
      
      setData(result.items || []);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
      setData([]); 
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [category])

  if (loading) {
    return <div className="feed">Loading...</div>;
  }

  if (error) {
    return <div className="feed">Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div className="feed">No videos found for this category.</div>;
  }

  return (
    <div className="feed">
      {data.map((item, index) => {
        // Safety checks to prevent crashes
        if (!item || !item.snippet || !item.id) {
          return null;
        }

        const thumbnail = item.snippet?.thumbnails?.medium?.url || thumbnail1;
        const title = item.snippet?.title || 'No title';
        const channelTitle = item.snippet?.channelTitle || 'Unknown channel';
        const viewCount = item.statistics?.viewCount || '0';
        const publishedAt = item.snippet?.publishedAt || new Date().toISOString();

        return (
          <Link 
            key={item.id || index} 
            to={`video/${category}/${item.id}`} 
            className='card'
          >
            <img src={thumbnail} alt={title} />
            <h2>{title}</h2>
            <h3>{channelTitle}</h3>
            <p>{value_converter(viewCount)} views &bull; {time_ago(publishedAt)}</p>
          </Link>
        );
      })}
    </div>
  )
}

export default Feed