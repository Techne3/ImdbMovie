import React from "react";

function BannerCount({ nominated }) {
  return (
    <div>
      <h1>{nominated.length}</h1>
    </div>
  );
}

export default BannerCount;
