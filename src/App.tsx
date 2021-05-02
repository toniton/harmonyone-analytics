import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Toggle from "react-toggle";

function App() {
  return (
    <div className="App">
      <Toggle id="cheese-status" defaultChecked={true} />
      <label htmlFor="cheese-status">Adjacent label tag</label>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
