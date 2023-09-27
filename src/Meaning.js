import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      <p>
        {props.meaning.definition}
        <br />
        {props.meaning.example}
        <br />
        {props.meaning.antonyms}
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
