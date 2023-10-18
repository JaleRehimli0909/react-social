import React from "react";
import "./style.css";

const Rightbar = () => {
  return (
    <div className="Rightbar">
      <div className="rigthbatWrapper">
        <div className="birthdayContainer">
          <img src="./assets/gift.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b> 3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="./assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                src="./assets/image3.jpg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tural Ekberli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                src="./assets/image3.jpg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tural Ekberli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                src="./assets/image3.jpg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tural Ekberli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                src="./assets/image3.jpg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tural Ekberli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                src="./assets/image3.jpg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tural Ekberli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                src="./assets/image3.jpg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tural Ekberli</span>
          </li>
          <li className="rightbarFriend">
            <div className="rightbarProfileContainer">
              <img
                src="./assets/image3.jpg"
                className="rightbarProfileImg"
                alt=""
              />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Tural Ekberli</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
