import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Explore from "./Explore";
import Register from "./Register";
import Login from "./Login";
import Card from "./cards";
import Product from "./sell";
import Buyproduct from "./Buy";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/card" element={<Card />}></Route>
          <Route path="/sell" element={<Product />}></Route>
          <Route path="/buy" element={<Buyproduct />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
