import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary defaultKeyword="unicorn" />
      </div>
      <footer className="text-center">
        <small>
          Coded with <span className="emojiColor">♥️</span> by{" "}
          <a
            href="https://monumental-malasada-41cd9f.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Mariama Touray
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/touraymk/dictionary-react-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
