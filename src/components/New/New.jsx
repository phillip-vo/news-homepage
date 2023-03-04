import React from "react";

import "./New.scss";

const New = ({ item }) => {
  return (
    <div className="app__new">
      <h3>{item.title}</h3>
      <p className="p-text">{item.description}</p>
    </div>
  );
};

export default New;
