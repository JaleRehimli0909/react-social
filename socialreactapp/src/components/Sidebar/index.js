import React from "react";
import "./style.css";
import {
  FaBookmark,
  FaCalendarAlt,
  FaPlayCircle,
  FaQuestionCircle,
  FaScroll,
  FaShoppingBag,
  FaStackExchange,
  FaUsers,
  FaWifi,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FaWifi className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <FaStackExchange className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <FaPlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <FaUsers className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <FaBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <FaQuestionCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <FaShoppingBag className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <FaCalendarAlt className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <FaScroll className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="./assets/person/image1.jpg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Jale Rehimli</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/image1.jpg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Jale Rehimli</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/image1.jpg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Jale Rehimli</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/image1.jpg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Jale Rehimli</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/image1.jpg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Jale Rehimli</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/image1.jpg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Jale Rehimli</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="./assets/person/image1.jpg"
              className="sidebarFriendImg"
              alt=""
            />
            <span className="sidebarFriendName">Jale Rehimli</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
