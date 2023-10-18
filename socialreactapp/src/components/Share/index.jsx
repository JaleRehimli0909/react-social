import React from "react";
import "./style.css";
import { FaImages, FaMapMarkerAlt, FaSmile, FaTag } from "react-icons/fa";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="./assets/person/image.jpg"
            className="shareProfileImg"
            alt=""
          />
          <input
            type="text"
            placeholder="What's in your Tural?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />

        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <FaImages style={{ color: "tomato" }} className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <FaTag style={{ color: "blue" }} className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <FaMapMarkerAlt
                style={{ color: "green" }}
                className="shareIcon"
              />
              <span className="shareOptionText">Locaction</span>
            </div>
            <div className="shareOption">
              <FaSmile style={{ color: "golden" }} className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="sharebutton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
