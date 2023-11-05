import React from "react";

const NavLeft = () => {
  return (
    <>
      <div className="nav-left">
        <ul>
          <li className="nav-icon">
            <img src="/images/icon_total.jpg" alt="" />
          </li>
          <li className="nav-icon">
            <img src="/images/icon_home.jpg" alt="" />홈
          </li>
          <li className="nav-icon">
            <img src="/images/icon_shorts.jpg" alt="" />
            Shorts
          </li>
          <li className="nav-icon">
            <img src="/images/icon_subscribe.jpg" alt="" />
            구독
          </li>
          <li className="nav-icon">
            <img src="/images/icon_my.jpg" alt="" />나
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavLeft;
