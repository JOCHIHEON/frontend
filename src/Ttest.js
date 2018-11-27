import React from "react";
import { Link } from "react-router-dom";
const Ttest = ({ match }) => {
  console.log("match", match);
  return (
    <div>
      <p>URL테스트1</p>
      <p>{`${match.url}`}</p>
    </div>
  );
};

export default Ttest;
