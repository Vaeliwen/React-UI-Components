import React from "react";
import "./Button.css";

const ActionComponent = buttonAction => {
  return <button class="action">{buttonAction.action}</button>;
};

export default ActionComponent;
