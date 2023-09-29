import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photo from "./Photo";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(false);
  let [loaded, setLoaded] = useState(null);
  let [photo, setPhoto] = useState(null);

  function handleDictionResponse(response) {
    setResults(response.data);
  }

  function handlePexelResponse(response) {
    setPhoto(response.data);
    console.log(response.data);
  }

  function search() {
    //https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "dc34aa4b26o1f14aa51aea20t25d63c3";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionResponse);
    console.log(apiUrl);

    //https://pexels.com/api/documantation/
    let pexelsApiKey =
      "VQexpZfcqPzH3vnHkGj3jpGHOQmunY8c7EVdKnUJXegC7cB4VDaYXz6Z";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary shadow">
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
        <Results results={results} />
        <Photo photo={photo} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
