import React from "react";
import ReactDOM from "react-dom";
const date = new Date();
const currentTime = date.getHours();
let greeting;
const custom = {
  color: ""
};

if (currentTime < 12) {
  greeting = "Good Morning";
  custom.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  custom.color = "green";
} else {
  greeting = "Good Night";
  custom.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={custom}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
