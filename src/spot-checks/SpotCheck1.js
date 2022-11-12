import React, { useState } from "react";

export default function SpotCheck1() {
  const [pageNumber, setPageNumber] = useState(1);

  const addPage = () => setPageNumber(pageNumber + 1);
  const backPage = () => setPageNumber(pageNumber - 1);

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        {pageNumber}
        <button onClick={addPage} className="next">
          next
        </button>
        <button onClick={backPage} className="back">
          back
        </button>
      </div>
    </div>
  );
}
