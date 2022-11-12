import React, { useState, useEffect } from "react";

export default function Exercise1() {
  const [userName, setUserName] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userCountry, setUserCountry] = useState("");

  function userNameHandler(event) {
    setUserName(event.target.value);
  }

  function userCityHandler(event) {
    setUserCity(event.target.value);
  }

  function userCountryHandler(event) {
    setUserCountry(event.target.value);
  }

  const countries = ["united states", "china", "united kingdom", "australia"];
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <div>
          user name{" "}
          <input
            type="text"
            value={userName}
            onChange={userNameHandler}
            placeholder="user name"
          ></input>
        </div>
        <div>
          city{" "}
          <input
            type="text"
            value={userCity}
            onChange={userCityHandler}
            placeholder="city"
          ></input>
        </div>
        <select value={userCountry} onChange={userCountryHandler}>
          <option hidden>Select country...</option>
          <option value={countries[0]}>{countries[0]}</option>
          <option value={countries[1]}>{countries[1]}</option>
          <option value={countries[2]}>{countries[2]}</option>
          <option value={countries[3]}>{countries[3]}</option>
        </select>
      </div>
    </div>
  );
}
