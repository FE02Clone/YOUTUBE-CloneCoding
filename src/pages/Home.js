import React from "react";
import NavLeft from "../components/NavLeft";
import MenuFilter from "../components/MenuFilter";
import Videos from "../components/Videos";
import VideoShorts from "../components/VideoShorts";
import SearchHeader from "../components/SearchHeader";
import VideosSearch from "./VideosSearch";
const Home = () => {
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
