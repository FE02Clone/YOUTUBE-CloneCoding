import React from "react";
import NavLeft from "../components/NavLeft";
import MenuFilter from "../components/MenuFilter";
import Videos from "../components/Videos";
import VideoShorts from "../components/VideoShorts";

const Home = () => {
  return (
    <>
      <div className="container">
        <NavLeft />
        <div className="main-con">
          <MenuFilter />
          <Videos />
          <VideoShorts />
        </div>
      </div>
    </>
  );
};

export default Home;
