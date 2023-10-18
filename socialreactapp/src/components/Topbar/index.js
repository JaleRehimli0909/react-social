import React from "react";
import "./style.css";
import { FaSistrix, FaUserAlt, FaBell, FaStackExchange } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">RehimliSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <FaSistrix className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="serachInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <FaUserAlt />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FaStackExchange />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <FaBell />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="./assets/person/image.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default Topbar;
