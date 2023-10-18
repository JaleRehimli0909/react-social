import React from "react";
import "./style.css";
import {Users} from '../../Pages/UsersData';
import Online from "../Online";

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

          {
            Users.map((u)=>(
              <Online key={u.id} user ={u}/>
            ))
          }
        
      
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
