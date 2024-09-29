import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreateUser from "./CreateUser";
import axios from "axios";
import baseURL from "../api.js";

const Users = () => {
  const [users, setUsers] = useState([
    {
      name: "",
      email: "",
      age: "",
      Action: "",
    },
  ]);

  console.log("base urll ", baseURL);

  const navigate = useNavigate();
  useEffect(() => {
    // Get the token from localStorage
    const token = localStorage.getItem("authToken");
    console.log("token inusers get ", token);

    if (!token) {
      alert("No token found. Please login.");
      navigate("/login"); // Redirect to login if no token is found
      return;
    }

    // Make a request to the server with the token in the headers
    axios
      .get(`${baseURL}/getUsers`, {
        headers: {
          Authorization: `Bearer ${token}`, // Add token to Authorization header
        },
      })
      .then((result) => {
        setUsers(result.data);
        console.log("Fetched users:", result.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response && err.response.status === 401) {
          alert("access denied.");
          localStorage.removeItem("authToken  101895816796"); // Clear invalid token
          navigate("/login"); // Redirect to login page
        }
      });
  }, [navigate]);

  const logoutSubmit = () => {
    alert("logout");
    localStorage.removeItem("authToken");

    // Redirect to login page
    navigate("/login");
  };
  return (
    <>
      <div className="table-container">
        <Link to="/create">
          <button className="btn btn-success">Add</button>
        </Link>

        <button className="btn btn-success" onClick={logoutSubmit}>
          Logout
        </button>

        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.age}</td>
                <td>
                  <Link to={`/update/${item._id}`} className="btn btn-success">
                    Update
                  </Link>
                  <button className="btn btn-danger">Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
