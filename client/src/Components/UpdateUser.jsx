import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const [updateUsers, setupdateUsers] = useState({
    name: "",
    email: "",
    age: "",
  });

  const { id } = useParams();
  console.log("id frorm ", id);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getUpdateUsers/" + id)
      .then((result) => {
        setupdateUsers(result.data);
        console.log(" data", result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateonchangeFunc = (e) => {
    const { name, value } = e.target;
    setupdateUsers((prev) => ({ ...prev, [name]: value }));
  };

  const updateSubmit = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:3000/updateUser/" + id, updateUsers)
      .then((response) => {
        if (response.data.message === "successfully") {
          setupdateUsers({
            name: response.data.user.name,
            email: response.data.user.email,
            age: response.data.user.age,
          });
          alert("updater successfully");
        } else {
          alert("err in update");
        }
      })
      .catch((e) => {
        alert("err in update");
      });
  };
  return (
    <div>
      <div>
        <form className="custom-form" onSubmit={updateSubmit}>
          Update User
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={updateUsers.name}
              onChange={updateonchangeFunc}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={updateUsers.email}
              onChange={updateonchangeFunc}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="text"
              className="form-control"
              name="age"
              value={updateUsers.age}
              onChange={updateonchangeFunc}
            />
          </div>
          <button type="submit" className="btn btn-primary custom-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUser;
