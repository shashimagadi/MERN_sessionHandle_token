import axios from "axios";
import React, { useState } from "react";
import baseURL from "../../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    name: "",

    password: "",
  });
  const onChangeForm = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate();
  const submitForm = (e) => {
    alert("login button");
    e.preventDefault();
    axios
      .post(`${baseURL}/login/loginDetails`, loginData)
      .then((result) => {
        console.log("login success", result.data);
        if (result.data.message === "success") {
          localStorage.setItem("authToken", result.data.token);

          navigate("/users");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => console.log("login nfailure"));
  };
  return (
    <div>
      {" "}
      <section className="vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-12 col-xl-7">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-2">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5">
                      <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 ">
                        Login
                      </p>

                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              name="name"
                              onChange={onChangeForm}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              name="password"
                              onChange={onChangeForm}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit" // Ensure this is "submit"
                            className="btn btn-primary btn-lg"
                            onClick={submitForm}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
