// src/UserList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserList.css";

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUser(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch users. Please try again.");
        setLoading(false);
        console.error(err);
      });
  }, []);

  if (loading) {
    return <p className="status-message">Loading users...</p>;
  }

  if (error) {
    return <p className="status-message status-error">{error}</p>;
  }

  return (
    <div className="user-page">
      <div className="user-container">
        <h1 className="user-title">User Directory</h1>
        <p className="user-subtitle">
          Fetched from <span>jsonplaceholder.typicode.com</span>
        </p>

        <ul className="user-list">
          {listOfUser.map((user) => (
            <li key={user.id} className="user-card">
              <div className="user-avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-info">
                <h2 className="user-name">{user.name}</h2>
                <p className="user-username">@{user.username}</p>

                <p className="user-field">
                  <span>Email:</span> {user.email}
                </p>
                <p className="user-field">
                  <span>City:</span> {user.address.city}
                </p>
                <p className="user-field">
                  <span>Company:</span> {user.company.name}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserList;
