import React from "react";
import "./Button.css";

const NumComponent = buttonNumber => {
  return <button class="number">{buttonNumber.value}</button>;
};

export default NumComponent;
