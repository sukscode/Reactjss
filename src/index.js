import React from "react";
import ReactDOM from "react-dom";
const fname = "Alpha";
const lname = "Alpha";
//const num = 7;
const img = "https://picsum.photos/200";
const custom = {
  color: "red",
  fontSize: "40px",
  border: "3px solid black"
};

ReactDOM.render(
  <div>
    <h1 style={custom}>Hello {fname + " " + lname}!</h1>
    <img src={img} />
  </div>,
  document.getElementById("root")
);
