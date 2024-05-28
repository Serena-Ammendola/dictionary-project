import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        {" "}
        This project was coded by
        <a
          href="https://github.com/Serena-Ammendola"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Serena Ammendola
        </a>
        {"  "}
        and is
        <a
          href="https://github.com/Serena-Ammendola/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          {"  "}
          on GitHub
        </a>
        {"  "}
        and hosted
        <a
          href="https://dictionary-project-react1.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          on Netlify.
        </a>
      </footer>
    </div>
  );
}
