import React from "react";
import { LuPlus } from "react-icons/lu";

function Buyproduct(){
    return (
        <div>
            <nav style={{borderBottom:"1px solid #e7e1e1"}}>
        <div className="one">
          <img
            style={{ height: "70px" }}
            src="src/assets/logo.png"
            alt="logo"
          />
        </div>
        <div className="two">
         <button className="sell">
            <h6>
              <LuPlus style={{ color: "white", height: "50px" }} /> SELL
            </h6>
          </button>
          <img
            style={{ height: "50px" }}
            src="src/assets/icon.jpg"
            alt="icon img"
          />
        </div>
      </nav >
      <nav className="navbar navbar-expand-lg" style={{borderBottom:"1px solid #F3F3F7"}}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false<BsHeart />"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav">
              <a className="nav-link" href="#">
                All
              </a>
              <a className="nav-link" href="#">
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
      <div className="row" style={{width:"100%"}}>
        <div className="col-3">
            <p>Back to product page</p>
        </div>
        <div className="col-3">image</div>
        <div className="col-3"><h2>Product detail</h2></div>
        <div className="col-3"></div>
        </div>
      </div>
    )
}

export default Buyproduct;