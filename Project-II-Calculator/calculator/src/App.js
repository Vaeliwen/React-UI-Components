import React from "react";
import "./App.css";

import ActionComponent from "./components/ButtonComponents/ActionButton.js";
import NumComponent from "./components/ButtonComponents/NumberButton.js";
import CalcDisplay from "./components/DisplayComponents/CalculatorDisplay.js";
import ClearButton from "./components/ButtonComponents/ClearButton.js";

const App = () => {
  return (
    <div class="container">
      <div class="things">
        <CalcDisplay />
        <ClearButton />
        <ActionComponent action="&divide;" />
        <NumComponent value="1" />
        <NumComponent value="2" />
        <NumComponent value="3" />
        <ActionComponent action="&times;" />
        <NumComponent value="4" />
        <NumComponent value="5" />
        <NumComponent value="6" />
        <ActionComponent action="-" />
        <NumComponent value="7" />
        <NumComponent value="8" />
        <NumComponent value="9" />
        <ActionComponent action="+" />
        <NumComponent value="0" />
        <ActionComponent action="=" />
      </div>
    </div>
  );
};

export default App;
