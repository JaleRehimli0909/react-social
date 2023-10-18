import React from "react";
import "./style.css";
import Share from "../Share";
import Post from "../Post";
import { Posts } from "../../Pages/PostsData";

const Feed = () => {
  return (
    <div className="Feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
