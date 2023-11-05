import React from "react";

const SearchHeader = () => {
  return (
    <>
      <nav className="top-nav">
        <div className="logo">
          <img src="/images/logo_youtube.jpg" alt="유투브로고" />
        </div>
        <div className="search">
          <input type="text" />
          <button className="btn-search">
            <img src="/images/icon_search.jpg" alt="search" />
          </button>
        </div>
        <div className="login">
          <img src="/images/login.jpg" alt="" />
        </div>
      </nav>
    </>
  );
};

export default SearchHeader;
