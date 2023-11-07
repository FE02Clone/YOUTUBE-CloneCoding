import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SearchHeader = () => {
  const [keyword, setKeyword] = useState("");
  const [videos, setVideos] = useState([]);
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSearch = async () => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${keyword}&key=${process.env.REACT_APP_YOUTUBE_API_KEYI}`
    );

    const videoItems = response.data.items;
    setVideos(videoItems); // videos 상태 업데이트
    console.log(videos);

    const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/search/${text}`);
    };

    // useEffect(() => setText(keyword || ""), [keyword]);
    return (
      <>
        <nav className="top-nav">
          <Link to="/">
            <div className="logo">
              <img src="/images/logo_youtube.jpg" alt="유투브로고" />
            </div>
          </Link>
          <div className="search">
            <form onSubmit={handleSubmit}>
              <input type="text" value={keyword} onChange={handleInputChange} />
              <button className="btn-search" onClick={handleSearch}>
                <GoSearch />
              </button>
            </form>
          </div>
          <div className="login">
            <div className="IconSubscribe">
              <AiOutlineVideoCameraAdd />
            </div>
            <div className="IconAlarm">
              <BsBell />
            </div>
            <Link to="/login">
              <div className="User"></div>
            </Link>
          </div>
        </nav>
      </>
    );
  };
};

export default SearchHeader;
