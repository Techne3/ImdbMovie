import React, { useState } from "react";
import Banner from "./Banner";
import BannerCount from "./BannerCount";

function AddedMovies({
  nominated,
  removeNominated,
  isDisabled,
  setIsDisabled,
}) {
  const [isD, setIsD] = useState(false);

  return (
    <>
      {nominated.length === 5 ? (
        <Banner />
      ) : (
        <BannerCount nominated={nominated} />
      )}
      <h1>Nominated Movies</h1>
      <div>
        {nominated.map((x) => {
          return (
            <>
              <h1>{x.Title}</h1>
              <img src={x.Poster} alt="movie Poster" />
              <button
                onClick={() => {
                  removeNominated(x.imdbID);
                  //   setIsDisabled(!isDisabled);
                }}
              >
                Clear
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default AddedMovies;
