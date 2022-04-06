import React from "react";
import "./Widget.css";
import InfoIcon from "@material-ui/icons/Info";
import { FiberManualRecord } from "@material-ui/icons";

function Widget() {
  const newsArticle = (heading, subtitle) => {
    return (
      <div className="widget__article">
        <div className="widget__articleLeft">
          <FiberManualRecord />
        </div>
        <div className="widget__articleRight">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="widget">
      <div className="widget__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("New Article", "Lorem ipsum dolor sit amet")}
      {newsArticle("New Article", "Lorem ipsum dolor sit amet")}
      {newsArticle("New Article", "Lorem ipsum dolor sit amet")}
    </div>
  );
}

export default Widget;
