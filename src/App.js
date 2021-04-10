import TopBar from "./Sections/Navbar.js";
import OpenSources from "./Sections/openSources.js";
import snowy from "./Snowy.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="App-header">
        <img src={snowy} className="App-logo" alt="logo" />
        <p>
          By <code style={{ fontSize: 35 + "px", fontWeight: 900 }}>Snowy</code>{" "}
          Tutorials, Free-Sources, and more...
        </p>
        <a
          className="App-link"
          href="https://github.com/Snowy7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow on Github
        </a>
      </div>
      <OpenSources />
    </div>
  );
}

export default App;
