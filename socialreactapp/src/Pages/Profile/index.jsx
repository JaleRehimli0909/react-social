import React from 'react';
import './style.css';
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Rightbar from "../../components/Rightbar";

const Profile = () => {
  return (
    <>
    <Topbar />
    <div className="profile">
      <Sidebar />
      <div className='profileRight'>
        <div className='profileRightTop'>
            <div className='profileCover'>
            <img className='profileCoverImg' src='./assets/bgprofile.jpg' alt=''/>
            <img className='profileUserImg' src='assets/profile.jpg' alt=''/>

            </div>
            <div className="profileInfo">
                <h4 className='profileInfoName'>Jale Rehimli</h4>
                <span className='profileInfoDesc'>Hello my friends!</span>
            </div>
        </div>
        <div className='profileRightBottom'>
      <Feed />
      <Rightbar  profile />

        </div>
      </div>
    </div>
  </>
  )
}

export default Profile;