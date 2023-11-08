import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { apiKey } from "../shared/firebase";
import { useDispatch, useSelector } from "react-redux";
import { loginFB, logoutFB } from "../redux/modules/user";

const SearchHeader = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.userReducer.is_login);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  //세션 확인
  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  console.log(is_login);
  console.log(is_session);

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/search/${keyword}`);
  };

  if (is_login && is_session) {
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
            {/* <Link to="/login">
            <div className="User"></div>
          </Link> */}
            <button
              onClick={() => {
                dispatch(logoutFB());
              }}
            >
              로그아웃
            </button>
          </div>
        </nav>
      </>
    );
  } else {
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
            {/* <Link to="/login">
            <div className="User"></div>
          </Link> */}
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </button>
          </div>
        </nav>
      </>
    );
  }
};

export default SearchHeader;
