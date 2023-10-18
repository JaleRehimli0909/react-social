import React from "react";
import "./style.css";
import { FaEllipsisV } from "react-icons/fa";

const Post = () => {
  return (
    <div className="Post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="./assets/person/image1.jpg"
              alt=""
            />
            <span className="postUsername">Jale Rehimli</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <FaEllipsisV />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! Its my first post</span>
          <img src="./assets/post/post1.jpg" alt="" className="postImg"/>
        </div>

        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="./assets/post/heart.jpg" alt="" className="likeIcon1"/>
                <img src="./assets/post/like.jpg" alt="" className="likeIcon2"/>
                <span className="postLikeCounter">32 people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 comments</span>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
