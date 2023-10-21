import React from "react";
import "./style.css";
import { Users } from "../../Pages/UsersData";
import Online from "../Online";

const Rightbar = ({ profile }) => {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="./assets/gift.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b> 3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="./assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information Title</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">New York</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Madrid</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relatinship:</span>
            <span className="rightBarInfoValue">Married</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src="./assets/person/user1.jpg"
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">Dwayne Johnson</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="./assets/person/user2.jpg"
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">Jack Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="./assets/person/user3.jpg"
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">Jale Rehimli</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="./assets/person/user4.jpg"
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">Jale Rehimli</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="./assets/person/user4.jpg"
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">Jale Rehimli</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src="./assets/person/user4.jpg"
              className="rightBarFollowingImg"
              alt=""
            />
            <span className="rightBarFollowingName">Jale Rehimli</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="Rightbar">
      <div className="rigthbatWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
        <ProfileRightBar />
      </div>
    </div>
  );
};

export default Rightbar;
