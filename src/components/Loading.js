import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";

export default function loading() {
  return (
    <div className="loading">
      <h4>vehicles data loading...</h4>
      <img src={loadingGif} alt="" />
    </div>
  );
}