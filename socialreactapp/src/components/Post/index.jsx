import React from "react";
import "./style.css";
import { FaEllipsisV } from "react-icons/fa";

const Post = ({ post }) => {
  console.log(post)
  return (
    <div className="Post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg" src={post.photo} alt="" />
            <span className="postUsername">{post.username}</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <FaEllipsisV />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          <img src="./assets/post/post1.jpg" alt="" className="postImg" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="./assets/post/heart.jpg" alt="" className="likeIcon1" />
            <img src="./assets/post/like.jpg" alt="" className="likeIcon2" />
            <span className="postLikeCounter">{post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
