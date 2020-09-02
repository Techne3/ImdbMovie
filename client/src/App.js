import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import axios from "axios";
import Results from "./components/Results";
import PopUP from "./components/PopUP";
import AddedMovies from "./components/AddedMovies";

function App() {
  const apiurl = "http://www.omdbapi.com/?apikey=cb0eb1c7";

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let result = data.Search;
        // console.log(data, "this is result");
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

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = (e) => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  const addMovie = (e) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };
  return (
    <div className="App">
      <header>
        <h1>IMDB Movies</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        <AddedMovies />
        {typeof state.selected.Title !== "undefined" ? (
          <PopUP selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
