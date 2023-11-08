import React from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { Link } from "react-router-dom";

const SearchHeader = () => {
  return (
    <>
      <nav className="top-nav">
        <Link to="/">
          <div className="logo">
            <img src="/images/logo_youtube.jpg" alt="유투브로고" />
          </div>
        </Link>
        <div className="search">
          <form action="">
            <input type="text" />
            <button className="btn-search">
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

export default SearchHeader;
