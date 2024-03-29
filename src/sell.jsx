import React from "react";
import { LuPlus } from "react-icons/lu";

const Product = () => {
  return (
    <div>
      <nav style={{ borderBottom: "1px solid #e7e1e1" }}>
        <div className="one">
          <img
            style={{ height: "70px" }}
            src="src/assets/logo.png"
            alt="logo"
          />
        </div>
        <div className="two">
          <img
            style={{ height: "50px" }}
            src="src/assets/icon.jpg"
            alt="icon img"
          />
        </div>
      </nav>
      <div className="row" style={{ width: "100%" }}>
        <div className="col-sm-3"></div>
        <div className="col-sm-3">
          <h1>
            <strong>Post your Ad</strong>
          </h1>
          <form className="d-flex flex-column gap-4">
            <div>
              <label htmlFor="title" className="form-label">
                Title *
              </label>
              <input
                style={{ height: "70px" }}
                type="text"
                className="form-control"
                id="title"
              />
            </div>
            <div>
              <label htmlFor="Description" className="form-label">
                Description *
              </label>
              <textarea
                style={{ height: "150px" }}
                type="text"
                className="form-control"
                id="Description"
                row="5"
              />
            </div>
            <div>
              <label htmlFor="price" className="form-label">
                Price *
              </label>
              <input
                style={{ height: "70px" }}
                type="text"
                className="form-control"
                id="Price"
              />
            </div>
            <div>
              <label htmlFor="inputGroup" className="form-label">
                Product category *
              </label>
              <select
                id="inputGroup"
                style={{
                  height: "70px",
                  width: "100%",
                  display: "block",
                  border: "1px solid",
                  backgroundColor: "white",
                }}
              >
                <option>Select category</option>
                <option value>Mobile</option>
                <option value>camera</option>
                <option value>others</option>
              </select>
            </div>
            <div>
              <label htmlFor="number" className="form-label">
                Phone number *
              </label>
              <input
                style={{ height: "70px" }}
                type="tel"
                className="form-control"
                id="number"
                placeholder="00000 00000"
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
            >
              <h4>
                <strong>Add your Post</strong>
              </h4>
            </button>
          </form>
        </div>
        <div className="col-sm-3" style={{ marginTop: "50px" }}>
          <div>
            <label htmlFor="image" className="form-label">
              Upload photo *
            </label>
            <input
              style={{ height: "400px" }}
              type="text"
              className="form-control"
              id="image"
            />
          </div>
        </div>
        <div className="col-sm-3"></div>
      </div>
    </div>
  );
};

export default Product;
