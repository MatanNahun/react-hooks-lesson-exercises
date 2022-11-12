import React, { useState, useEffect } from "react";

export default function SpotCheck3() {
  const [likesNumber, setLikesNumber] = useState(0);

  const addLike = () => setLikesNumber(likesNumber + 1);

  useEffect(() => {
    document.title = `You have ${likesNumber} likes`;
  });

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        <p>this post is very </p>
        <button onClick={addLike}>Like</button>
      </div>
    </div>
  );
}
