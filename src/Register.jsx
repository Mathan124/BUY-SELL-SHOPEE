import React, { useState } from "react";
import "./css/register.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    number: "",
    address: "",
  });

  const { firstname, lastname, email, password, number, address } = formData;

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
      const res = await axios.post("http://localhost:3001/register", {
        firstname,
        lastname,
        email,
        password,
        number,
        address,
      });
      console.log(`${(res, "Success")}`);
      alert("Welcome to the login page enter you email and password");
      navigate("/login");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <div className="container bg-img vh-100">
      <div className="row">
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <form
          onSubmit={handleSumbit}
          className="col-sm-10"
          style={{ marginTop: "50px" }}
        >
          <div className="row">
            <div className="col">
              <label
                style={{ fontSize: "20px" }}
                htmlFor="firstname"
                className="form-label"
              >
                <strong>First Name:</strong>
              </label>
              <input
                style={{ height: "60px" }}
                type="text"
                className="form-control"
                id="firstname"
                name="firstname"
                value={firstname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label
                style={{ fontSize: "20px" }}
                htmlFor="lastname"
                className="form-label"
              >
                <strong>Last Name:</strong>
              </label>
              <input
                style={{ height: "60px" }}
                type="text"
                className="form-control"
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col">
              <label
                style={{ fontSize: "20px" }}
                htmlFor="email"
                className="form-label"
              >
                <strong>Email:</strong>
              </label>
              <input
                style={{ height: "60px" }}
                type="email"
                className="form-control"
                id="email"
                placeholder="example@gmail.com"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <label
                style={{ fontSize: "20px" }}
                htmlFor="psw"
                className="form-label"
              >
                <strong>Password:</strong>
              </label>
              <input
                style={{ height: "60px" }}
                type="password"
                className="form-control"
                id="psw"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col">
              <label
                style={{ fontSize: "20px" }}
                htmlFor="pswd"
                className="form-label"
              >
                <strong>Confirm Password:</strong>
              </label>
              <input
                style={{ height: "60px" }}
                type="password"
                className="form-control"
                id="pswd"
                required
              />
            </div>
            <div className="col">
              <label
                style={{ fontSize: "20px" }}
                htmlFor="number"
                className="form-label"
              >
                <strong>Mobile Number:</strong>
              </label>
              <input
                style={{ height: "60px" }}
                type="number"
                className="form-control"
                id="number"
                placeholder="00000 00000"
                name="number"
                value={number}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col">
              <label
                style={{ fontSize: "20px" }}
                htmlFor="address"
                className="form-label"
              >
                <strong>Address:</strong>
              </label>
              <textarea
                style={{ height: "150px", width: "530px" }}
                type="text"
                className="form-control"
                id="address"
                row="3"
                placeholder="enter your address"
                name="address"
                value={address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button
                style={{
                  height: "50px",
                  width: "150px",
                  backgroundColor: "red",
                  fontSize: "20px",
                  border: "1px solid red",
                  marginTop: " 30px",
                }}
                type="submit"
                className="btn btn-primary"
              >
                <h4>Submit</h4>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
