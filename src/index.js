import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import logo from "./CodeHustle_Logo_Sticker.png";

function App() {
  return (
    <div className="App">
      <img alt="logo" src={logo} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
