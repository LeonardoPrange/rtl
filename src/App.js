import React from "react";
import "./App.css";
import Button from "./components/button";

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
      <div>
        <Button />
      </div>
    </div>
  );
}

export default App;
