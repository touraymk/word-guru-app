import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
      </div>
      <footer className="text-center">
        <small>
          Coded with <span className="emojiColor">♥️</span> by{" "}
          <a href="https://monumental-malasada-41cd9f.netlify.app">
            Mariama Touray
          </a>{" "}
          and is{" "}
          <a href="https://github.com/touraymk/dictionary-react-app">
            open-sourced
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
