import React from "react";
import "./App.css";

import ActionComponent from "./components/ButtonComponents/ActionButton.js";
import NumComponent from "./components/ButtonComponents/NumberButton.js";

const App = () => {
  return (
    <div>
      <NumComponent value="1" />
      <NumComponent value="2" />
      <NumComponent value="3" />
      <NumComponent value="4" />
      <NumComponent value="5" />
      <NumComponent value="6" />
      <NumComponent value="7" />
      <NumComponent value="8" />
      <NumComponent value="9" />
      <NumComponent value="0" />
      <ActionComponent action="+" />
      <ActionComponent action="-" />
      <ActionComponent action="*" />
      <ActionComponent action="/" />
      <ActionComponent action="=" />
    </div>
  );
};

export default App;
