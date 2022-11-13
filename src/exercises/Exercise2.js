import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Exercise2() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   axios.get("https://randomuser.me/api/?results=5").then((res) => {
  //     setUsers(res.data);
  //   });
  // }, []);

  useEffect(() => {
    const getUsers = async () => {
      const usersDataApi = await axios.get(
        "https://randomuser.me/api/?results=5"
      );
      setUsers(usersDataApi.data.results);
    };
    getUsers();
  }, []);

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2"></div>
      {users.map((user) => (
        <div key={user.name.first}>
          {user.name.first} {user.name.last}
          <img height="50" width="50" src={user.picture.large} alt="movie" />
        </div>
      ))}
    </div>
  );
}
