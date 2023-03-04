import React from "react";
import Article from "../Article/Article";
import "./ArticleSection.scss";
import { data } from "../../data/articleData";

const ArticleSection = () => {
  return (
    <div className="app__article-section">
      {data.map((item) => (
        <Article item={item} />
      ))}
    </div>
  );
};

export default ArticleSection;
