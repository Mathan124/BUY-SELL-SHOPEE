import React, { useState } from "react";
import "./css/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });
      console.log(`${(res, "Success")}`);
      if (res.data == "1") {
        console.log("Rendering login page");
        alert("Login successfull!");
        navigate("/card");
      } else {
        console.log("Falied to render to login page");
        alert("Unable to login, please enter a correct email id and password");
      }
    } catch (error) {
      console.error("Error sending data:, error");
    }
  };

  return (
    <div>
      <nav>
        <div className="one">
          <img className="image" src="src/assets/logo.png" alt="logo" />
        </div>
        <div className="two">
          <Link to="/register">
            <button className="register">
              <h4>Register</h4>
            </button>
          </Link>
        </div>
      </nav>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-sm-6">
          <img
            src="./src/assets/circle.png"
            alt="home image"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-sm-1 "></div>
        <div className="col-sm-3 ">
          <form
            onSubmit={handleSumbit}
            className="d-flex flex-column gap-3"
            style={{ marginTop: "150px" }}
          >
            <div>
              <label
                style={{ fontSize: "20px" }}
                htmlFor="Email"
                className="form-label"
              >
                Email
              </label>
              <input
                style={{ height: "70px" }}
                type="email"
                className="form-control"
                id="Email1"
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onChange={handleChange}
                required
                data-testid="mail"
              />
            </div>
            <div>
              <label
                style={{ fontSize: "20px" }}
                htmlFor="Password"
                className="form-label"
              >
                Password
              </label>
              <input
                style={{ height: "70px" }}
                type="password"
                className="form-control"
                id="Password"
                name="password"
                value={password}
                onChange={handleChange}
                required
                data-testid="Password"
              />
            </div>
            <button
              style={{
                height: "70px",
                backgroundColor: "red",
                fontSize: "20px",
                border: "1px solid red",
              }}
              type="submit"
              className="btn btn-primary"
              data-testid="submit"
            >
              <h4>Submit</h4>
            </button>
            <a style={{ textAlign: "center" }} href="">
              Forget Password?
            </a>
          </form>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}

export default Login;
