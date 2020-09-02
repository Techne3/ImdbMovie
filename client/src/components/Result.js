import React from "react";

function Result({ result, openPopup, addMovie }) {
  return (
    <div className="result">
      <img src={result.Poster} />
      <h3>{result.Title}</h3>
      <button onClick={() => addMovie(result.imdbID)}>Add Movie</button>
    </div>
  );
}

export default Result;
