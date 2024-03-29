import React from "react";
import "./css/card.css";
import { LuPlus } from "react-icons/lu";
import { BsHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

function Card() {
  const handleBuyProduct = (productName) => {
    console.log(`Product "${productName}" bought!`);
  };

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
          <Link to="/sell">
            <button className="sell">
              <h6>
                <LuPlus style={{ color: "white", height: "50px" }} /> SELL
              </h6>
            </button>
          </Link>
          <img
            style={{ height: "50px" }}
            src="src/assets/icon.jpg"
            alt="icon img"
          />
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-lg"
        style={{ borderBottom: "1px solid #F3F3F7" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false" // corrected aria-expanded value
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <a className="nav-link">All</a>
              <a className="nav-link" href="#car">
                Cars
              </a>
              <a className="nav-link" href="#">
                Furniture
              </a>
              <a className="nav-link" href="#">
                Motorcycle
              </a>
              <a className="nav-link" href="#">
                Mobile
              </a>
              <a className="nav-link" href="#">
                TV’s
              </a>
              <a className="nav-link" href="#">
                Kitchen appliances
              </a>
              <a className="nav-link" href="#">
                Computer & Laptops
              </a>
              <a className="nav-link" href="#">
                Home appliances
              </a>
              <a className="nav-link" href="#">
                Games & Entertainments
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <img
          className="row-image"
          src="/src/assets/circle.png"
          alt="row image"
        />
        <div className="text">
          <p>
            <span style={{ color: "red" }}>BUY</span> the{" "}
            <span style={{ color: "blue" }}>Product</span> for you!
          </p>
          <p>
            <span style={{ color: "red" }}>SELL</span> the{" "}
            <span style={{ color: "blue" }}>Product</span>!
          </p>
        </div>
      </div>
      <hr />
      <div className="row" style={{ width: "100%" }}>
        <div className="col-3 d-flex justify-content-center">
          <div className="card" style={{ width: "400px" }}>
            <img
              style={{ width: "398px", height: "218px", border: "1px solid" }}
              src="src/assets/cam.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Camera <BsHeart style={{ float: "right" }} />
              </h5>
              <h5>
                <strong>$ 250</strong>
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                deserunt.
              </p>
              <a
                className="btn btn-danger"
                style={{ width: "100%", height: "50px" }}
                onClick={() => handleBuyProduct("Camera")}
              >
                <h5>Buy the product</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="card" id="car" style={{ width: "400px" }}>
            <img
              style={{ height: "218px", border: "1px solid" }}
              src="src/assets/car.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Hundai Creta <BsHeart style={{ float: "right" }} />
              </h5>
              <h5>
                <strong>$ 2,20,000</strong>
              </h5>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Magnam, officiis!
              </p>
              <a
                className="btn btn-danger"
                style={{ width: "100%", height: "50px" }}
                onClick={() => handleBuyProduct("Hundai Creta")}
              >
                <h5>Buy the product</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="card" style={{ width: "400px" }}>
            <img
              style={{ height: "218px", border: "1px solid" }}
              src="src/assets/M.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Oneplus nord C3 5G <BsHeart style={{ float: "right" }} />
              </h5>
              <h5>
                <strong>$ 450</strong>
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                obcaecati.
              </p>
              <a
                className="btn btn-danger"
                style={{ width: "100%", height: "50px" }}
                onClick={() => handleBuyProduct("Oneplus norde C3 5G")}
              >
                <h5>Buy the product</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="card" id="car" style={{ width: "400px" }}>
            <img
              style={{ border: "1px solid" }}
              src="src/assets/img.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Honda City <BsHeart style={{ float: "right" }} />
              </h5>
              <h5>
                <strong>$ 1,45,000</strong>
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt, sit.
              </p>
              <a
                className="btn btn-danger"
                style={{ width: "100%", height: "50px" }}
                onClick={() => handleBuyProduct("Honda City")}
              >
                <h5>Buy the product</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ width: "100%", marginTop: "20px" }}>
        <div className="col-3 d-flex justify-content-center">
          <div className="card" style={{ width: "400px" }}>
            <img
              style={{ width: "398px", height: "218px", border: "1px solid" }}
              src="src/assets/cam.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Camera <BsHeart style={{ float: "right" }} />
              </h5>
              <h5>
                <strong>$ 250</strong>
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                deserunt.
              </p>
              <a
                className="btn btn-danger"
                style={{ width: "100%", height: "50px" }}
                onClick={() => handleBuyProduct("Camera")}
              >
                <h5>Buy the product</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="card" id="car" style={{ width: "400px" }}>
            <img
              style={{ height: "218px", border: "1px solid" }}
              src="src/assets/car.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Honda Creta <BsHeart style={{ float: "right" }} />
              </h5>
              <h5>
                <strong>$ 2,20,000</strong>
              </h5>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Magnam, officiis!
              </p>
              <a
                className="btn btn-danger"
                style={{ width: "100%", height: "50px" }}
                onClick={() => handleBuyProduct("Honda Creta")}
              >
                <h5>Buy the product</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="card" style={{ width: "400px" }}>
            <img
              style={{ height: "218px", border: "1px solid" }}
              src="src/assets/M.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Oneplus nord C3 5G <BsHeart style={{ float: "right" }} />
              </h5>
              <h5>
                <strong>$ 450</strong>
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                obcaecati.
              </p>
              <a
                className="btn btn-danger"
                style={{ width: "100%", height: "50px" }}
                onClick={() => handleBuyProduct("Oneplus norde C3 5G")}
              >
                <h5>Buy the product</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="card" id="car" style={{ width: "400px" }}>
            <img
              style={{ border: "1px solid" }}
              src="src/assets/img.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Honda City <BsHeart style={{ float: "right" }} />
              </h5>
              <h5>
                <strong>$ 1,45,000</strong>
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt, sit.
              </p>
              <a
                className="btn btn-danger"
                style={{ width: "100%", height: "50px" }}
                onClick={() => handleBuyProduct("Honda City")}
              >
                <h5>Buy the product</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row"
        style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
      >
        <div className="col-3 d-flex justify-content-center">
          <div className="card" style={{ width: "400px" }}>
            <img
              style={{ width: "398px", height: "218px", border: "1px solid" }}
              src="src/assets/cam.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Camera <BsHeart style={{ float: "right" }} />
              </h5>
              <h5>
                <strong>$ 250</strong>
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                deserunt.
              </p>
              <a
                className="btn btn-danger"
                style={{ width: "100%", height: "50px" }}
                onClick={() => handleBuyProduct("Camera")}
              >
                <h5>Buy the product</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="card" id="car" style={{ width: "400px" }}>
            <img
              style={{ height: "218px", border: "1px solid" }}
              src="src/assets/car.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Hundai Creta <BsHeart style={{ float: "right" }} />
              </h5>
              <h5>
                <strong>$ 2,20,000</strong>
              </h5>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Magnam, officiis!
              </p>
              <a
                className="btn btn-danger"
                style={{ width: "100%", height: "50px" }}
                onClick={() => handleBuyProduct("Hundai Creta")}
              >
                <h5>Buy the product</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="card" style={{ width: "400px" }}>
            <img
              style={{ height: "218px", border: "1px solid" }}
              src="src/assets/M.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Oneplus nord C3 5G <BsHeart style={{ float: "right" }} />
              </h5>
              <h5>
                <strong>$ 450</strong>
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                obcaecati.
              </p>
              <a
                className="btn btn-danger"
                style={{ width: "100%", height: "50px" }}
                onClick={() => handleBuyProduct("Oneplus norde C3 5G")}
              >
                <h5>Buy the product</h5>
              </a>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center">
          <div className="card" id="car" style={{ width: "400px" }}>
            <img
              style={{ border: "1px solid" }}
              src="src/assets/img.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">
                Honda City <BsHeart style={{ float: "right" }} />
              </h5>
              <h5>
                <strong>$ 1,45,000</strong>
              </h5>
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt, sit.
              </p>
              <a
                className="btn btn-danger"
                style={{ width: "100%", height: "50px" }}
                onClick={() => handleBuyProduct("Honda City")}
              >
                <h5>Buy the product</h5>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
