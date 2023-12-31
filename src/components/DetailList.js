import React from "react";
import moment from "moment";
import "moment/locale/ko";
import { Link } from "react-router-dom";

const DetailList = ({ video }) => {
  const time = moment(video.snippet.publishedAt).fromNow();
  const view = video.statistics.viewCount;
  const count = Math.floor(view / 10000);

  // console.log(video);
  return (
    <Link
      to={`/video/detail/${video.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="DetailSmallList">
        <div>
          <img
            className="DetailSmallImg"
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
          />
        </div>
        <div className="DetailRtText">
          <div className="DetailRtTitle">{video.snippet.title}</div>
          <div className="DetailRtTextS">
            {video.snippet.channelTitle} <br /> 조회수 {count}만 회 ㆍ{time}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DetailList;
