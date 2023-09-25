import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary p-5 shadow">
      <section className="header">
        <h1>Word Guru 📖</h1>
        <h2>What word would you like to look up?</h2>
        <form>
          <input type="search" placeholder="unicorn" autoFocus={true} />
        </form>
      </section>
    </div>
  );
}
