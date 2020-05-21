import React from "react";
import "./App.css";
import Button from "./components/button";
import List from "./components/list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="Examples">
        <Button />
        <List />
      </div>
    </div>
  );
}

export default App;
