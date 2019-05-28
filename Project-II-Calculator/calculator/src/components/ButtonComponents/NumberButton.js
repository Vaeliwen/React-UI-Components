import React from "react";
import "./Button.css";

const NumComponent = buttonNumber => {
  return <button>{buttonNumber.value}</button>;
};

export default NumComponent;
