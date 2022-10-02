import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defoultCity="London" />
        <footer>
          This progect was coded by{" "}
          <a
            href="https://www.linkedin.com/in/natalia-hishpan-91333622a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nataliia Hishpan
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/NataliHishpan/React-Weather-Project.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourse on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
