import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  //let [results, setResults] = useState(false);

  function handleDictionResponse(response) {
    console.log(response.data);
  }

  function search() {
    //https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "dc34aa4b26o1f14aa51aea20t25d63c3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionResponse);
    console.log(apiUrl);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary p-5 shadow">
      <section className="header">
        <h1>Word Guru 📖</h1>
        <h2>What word would you like to look up?</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeywordChange}
            placeholder="unicorn"
            autoFocus={true}
          />
        </form>
      </section>
    </div>
  );
}
