import React from "react";
import Result from "./Result";

function Results({
  results,
  addMovie,
  disabledBtn,
  isDisabled,
  setIsDisabled,
  selectedItem,
  setSelectedItem,
}) {
  console.log(selectedItem, "this is the selectedx");
  return (
    <section className="results">
      {results.map((result, i) => (
        <div className="result">
          <img src={result.Poster} />
          <h3>{result.Title}</h3>
          <button
            // className={
            //   selectedItem.indexOf(result.imdbID) !== -1
            //     ? "btn btn-disabled"
            //     : ""
            // }
            disabled={selectedItem.indexOf(result.imdbID) !== -1 ? true : false}
            key={i}
            onClick={() => {
              addMovie(result.imdbID);
              setSelectedItem(result.imdbID);
              disabledBtn(result.imdbID);
            }}
            // className={isDisabled ? "btn btn-disabled" : "btn btn-notDisabled"}
            // disabled={isDisabled ? true : false}
          >
            Nominate
          </button>
          <></>
        </div>

        // <Result
        //   key={result.imdbID}
        //   result={result}
        //   addMovie={addMovie}
        //   disabledBtn={disabledBtn}
        //   isDisabled={isDisabled}
        //   setIsDisabled={setIsDisabled}
        // />
      ))}
    </section>
  );
}

export default Results;
