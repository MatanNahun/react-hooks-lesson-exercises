import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Exercise2() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2"></div>
      {/* <div>
        {users["results"].map((user) => (
          <p>{user.gender}</p>
        ))}
      </div> */}
    </div>
  );
}
