import React from "react";

function AddedMovies({ selected }) {
  return (
    <div>
      {selected.map((x) => {
        return (
          <>
            <h1>{x.Title}</h1>
            <button>Clear</button>
          </>
        );
      })}
    </div>
  );
}

export default AddedMovies;
