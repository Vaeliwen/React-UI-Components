import React from "react";
import "./Button.css";

const ActionComponent = buttonAction => {
  return <button>{buttonAction.action}</button>;
};

export default ActionComponent;
