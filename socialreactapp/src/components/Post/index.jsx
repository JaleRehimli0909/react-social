import React, { useState } from "react";
import "./style.css";
import { FaEllipsisV } from "react-icons/fa";

const Post = ({ post }) => {

  const [like,setLike] = useState(post.like);
  const [isLiked,setiSLiked] = useState(false);

  const likeHandle = () => {
    setLike( isLiked ? like - 1 : like+ 1);
    console.log(isLiked)
    setiSLiked(!isLiked);
  }



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
            <img src="./assets/post/like.jpg"  onClick={likeHandle} alt="" className="likeIcon2" />
            <img src="./assets/post/heart.jpg" onClick={likeHandle} alt="" className="likeIcon1" />
            <span className="postLikeCounter">{like} people like it</span>
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
