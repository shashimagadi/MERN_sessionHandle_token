import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [createUsers, setCreateUsers] = useState({
    name: "",
    email: "",
    age: "",
  });

  const onchangeFunc = (e) => {
    const { name, value } = e.target;
    setCreateUsers((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/createUser", createUsers)
      .then((response) => {
        alert("post successfully");
        navigate("/");
      })
      .catch((e) => {
        alert("err in post");
      });
  };

  console.log("unsersss out side", createUsers);
  return (
    <div>
      <form className="custom-form" onSubmit={handleSubmit}>
        Create User
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={createUsers.name}
            onChange={(e) => onchangeFunc(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={createUsers.email}
            onChange={(e) => onchangeFunc(e)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="text"
            className="form-control"
            name="age"
            value={createUsers.age}
            onChange={(e) => onchangeFunc(e)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary custom-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
