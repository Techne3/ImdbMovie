import React from "react";
import Banner from "./Banner";

function AddedMovies({ nominated, removeNominated }) {
  return (
    <>
      {nominated.length === 5 ? <Banner /> : false}
      <h1>Nominated Movies</h1>
      <div>
        {nominated.map((x) => {
          return (
            <>
              <h1>{x.Title}</h1>
              <img src={x.Poster} alt="movie Poster" />
              <button onClick={() => removeNominated(x.imdbID)}>Clear</button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AddedMovies;
