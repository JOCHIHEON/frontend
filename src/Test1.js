import React from "react";
import { Link } from "react-router-dom";
const Test1 = ({ match }) => {
  console.log("match", match);
  return (
    <div>
      <p>URL테스트1</p>
      <p>{`${match.url}`}</p>
    </div>
  );
};

export default Test1;
