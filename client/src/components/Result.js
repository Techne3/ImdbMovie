import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import axios from "axios";

function Result({
  result,
  openPopup,
  disabledBtn,
  isDisabled,
  setIsDisabled,
  addMovie,
}) {
  // const apiurl = "http://www.omdbapi.com/?apikey=cb0eb1c7";
  const [isD, setIsD] = useState(false);
  // const [nominated, SetNominated] = useState([]);
  console.log(isDisabled, "buttonß");

  return (
    <div className="result">
      <img src={result.Poster} />
      <h3>{result.Title}</h3>
      <button
        disabled={isDisabled ? true : false}
        key={result.imdbID}
        onClick={() => {
          addMovie(result.imdbID);
          disabledBtn();
        }}
        // className={isDisabled ? "btn btn-disabled" : "btn btn-notDisabled"}
        // disabled={isDisabled ? true : false}
      >
        Nominate
      </button>
      <></>
    </div>
  );
}

export default Result;
