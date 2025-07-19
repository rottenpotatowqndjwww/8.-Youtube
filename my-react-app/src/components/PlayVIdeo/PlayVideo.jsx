import React, { useEffect, useState } from 'react';
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import dot from '../../assets/dot.png';
import user_profile from '../../assets/user_profile.jpg';
import { API_KEY } from '../../data';
import { value_converter, time_ago } from '../../data';
import { toast, ToastContainer } from 'react-toastify';

const PlayVideo = ({ videoId }) => {
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState(null);

    const fetchVideoData = async () => {
        const videoDetails_url = `api key here`;
        await fetch(videoDetails_url)
            .then(res => res.json())
            .then(data => setApiData(data.items[0]));
    };

    const fetchChannelData = async () => {
        const channelDetails_url = `api key here`;
        await fetch(channelDetails_url)
            .then(res => res.json())
            .then(data => setChannelData(data.items[0]));

        const comment_url = `api key here`;
        await fetch(comment_url)
            .then(res => res.json())
            .then(data => setCommentData(data.items));
    };

    useEffect(() => {
        fetchVideoData();
    }, [videoId]);

    useEffect(() => {
        if (apiData) {
            fetchChannelData();
        }
    }, [apiData]);

    return (
        <div className='play-video'>
            <iframe
                src={`api key here`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>

            <h3>{apiData ? apiData.snippet.title : "Title Here...."}</h3>

            <div className="play-video-info">
                <p>
                    {value_converter(apiData?.statistics?.viewCount || 20)} views &bull;{" "}
                    {time_ago(apiData?.snippet?.publishedAt || "18 Days Ago")}
                </p>
                <div>
                    <span><img src={like} alt="" />{value_converter(apiData?.statistics?.likeCount || 100)}</span>
                    <span><img src={dislike} alt="" /></span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Download</span>
                    <span><img src={dot} alt="" /></span>
                </div>
            </div>

            <hr />

            <div className="publisher">
                {channelData && channelData.snippet.thumbnails.default.url ? (
                    <img src={channelData.snippet.thumbnails.default.url} alt="" />
                ) : (
                    <img src={user_profile} alt="" />
                )}
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : "Channel Name"}</p>
                    <span>{value_converter(channelData?.statistics?.subscriberCount || 100)} subscribers</span>
                </div>
                 <>
                      <button onClick={() => toast("Thanks For Suscribing !!!")}>Subscribe</button>
                     <ToastContainer />
                 </>
            </div>

            <div className="vid-description">
                <p>{apiData ? apiData.snippet.description.slice(0, 300) + '...' : "Description Here"}</p>
                <hr />
                <h4>{value_converter(apiData?.statistics?.commentCount || 100)} Comments</h4>
                {
                    commentData && commentData.map((item, index) => (
                        <div key={index} className="comment">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3>
                                    {item.snippet.topLevelComment.snippet.authorDisplayName} 
                                    <span>{time_ago(item.snippet.topLevelComment.snippet.publishedAt)}</span>
                                </h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className="comment-action">
                                    <img src={like} alt="" />
                                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img src={dislike} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PlayVideo;