import React from "react";
import "./Article.scss";

const Article = ({ item }) => {
  return (
    <div className="app__article">
      <img src={item.image} alt={item.title} />
      <div className="app__article-items">
        <div>
          <h2>{item.id}</h2>
          <span>{item.title}</span>
          <p className="p-text">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
