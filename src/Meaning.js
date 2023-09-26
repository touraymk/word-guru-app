import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <ul>
        <li>{props.meaning.definition}</li>
        <li>{props.meaning.example}</li>
        <li></li>
        <li>{props.meaning.antonyms}</li>
      </ul>
    </div>
  );
}
