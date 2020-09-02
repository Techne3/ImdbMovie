import React from "react";
import Result from "./Result";

function Results({ results, openPopup, addMovie }) {
  return (
    <section className="results">
      {results.map((result) => (
        <Result
          key={result.imdbID}
          result={result}
          openPopup={openPopup}
          addMovie={addMovie}
        />
      ))}
    </section>
  );
}

export default Results;
