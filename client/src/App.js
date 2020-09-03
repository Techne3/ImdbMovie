import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import axios from "axios";
import Results from "./components/Results";
import PopUP from "./components/PopUP";
import AddedMovies from "./components/AddedMovies";
import Loader from "react-loader-spinner";
import Banner from "./components/Banner";

function App() {
  const apiurl = "http://www.omdbapi.com/?apikey=cb0eb1c7";

  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
    loading: false,
  });
  const [nominated, SetNominated] = useState([]);
  // const [loading, setLoading] = useState(true);

  const search = (e) => {
    if (e.key === "Enter") {
      setState({ loading: true });
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let result = data.Search;
        // console.log(data, "this is result");
        setState((prevState) => {
          return { ...prevState, results: result, loading: false };
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

  const removeNominated = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      SetNominated(nominated.filter((x) => x.imdbID !== id));
    });
  };

  const addMovie = (id) => {
    if (nominated.length < 5) {
      axios(apiurl + "&i=" + id).then(({ data }) => {
        let result = data;
        console.log(result);

        SetNominated([...nominated, result]);
      });
    }
  };

  return (
    <div className="App">
      <header>
        <h1>IMDB Movies</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        {state.loading ? (
          <div className="loading">
            <Loader type="Circles" color="#40968e" height={200} width={150} />
          </div>
        ) : (
          <Results
            results={state.results}
            openPopup={openPopup}
            addMovie={addMovie}
          />
        )}

        {nominated.length ? (
          <AddedMovies
            nominated={nominated}
            removeNominated={removeNominated}
          />
        ) : (
          false
        )}

        {/* {typeof state.selected.Title !== "undefined" ? (
          <PopUP selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )} */}
      </main>
    </div>
  );
}

export default App;
//   className={isMonth ? 'monthBtnOn' : 'monthBtnOff'}
// onClick={() => setIsMonth(!isMonth)}
