import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/ko";

const VideoCard = () => {
  const [video, setVideo] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&maxResults=25&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    setVideo(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(video.items);

  return (
    <>
      {video.items &&
        video.items.map((item, index) => {
          const time = moment(item.snippet.publishedAt).fromNow();
          const view = item.statistics.viewCount;
          const count = Math.floor(view / 10000);
          return (
            <div className="thumb-area" key={index}>
              <img
                className="thumb-mv"
                src={item.snippet.thumbnails.standard.url}
                alt={item.snippet.title}
              />
              <div className="thumb-detail">
                <div className="thumb-logo"></div>
                <div className="thumb-description">
                  <div className="thumb-title">{item.snippet.title}</div>
                  <div className="thumb-user">{item.snippet.channelTitle}</div>
                  <div className="thumb-time">
                    조회수 {count}만 회 ㆍ{time}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default VideoCard;
