import React from "react";

function PopUP({ selected, closePopup }) {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title}
          <span> ({selected.Year})</span>
        </h2>
        <p className="rating"> Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} alt="movie Poster" />
          <p>{selected.Plot}</p>
        </div>
        <button className="close" onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
}

export default PopUP;
