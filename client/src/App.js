import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import axios from "axios";
import Results from "./components/Results";

function App() {
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=cb0eb1c7";

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let result = data.Search;
        setState((prevState) => {
          return { ...prevState, results: result };
        });
      });
    }
  };
  const handleInput = (e) => {
    let search = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: search };
    });
  };
  return (
    <div className="App">
      <header>
        <h1>IMDB Movies</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
