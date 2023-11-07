import React from "react";
import NavLeft from "../components/NavLeft";
import MenuFilter from "../components/MenuFilter";
import Videos from "../components/Videos";
import VideoShorts from "../components/VideoShorts";
import SearchHeader from "../components/SearchHeader";
import VideosSearch from "./VideosSearch";
const Home = () => {
  const filterList = [
    "전체",
    "음악",
    "다시보기",
    "실시간",
    "최근에 업로드된 영상",
    "새로운 맞춤영상",
  ];

  return (
    <>
      <div className="container">
        <NavLeft />

        <div className="main-con">
          <SearchHeader />
          <MenuFilter />
          <Videos />
          <VideoShorts />
        </div>
      </div>
    </>
  );
};

export default Home;
