import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Signup } from "./components/Signup";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Cart } from "./components/Cart";
import { Viewproduct } from "./components/Viewproduct";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/login" element={<Login showAlert={showAlert} />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/viewproduct" element={<Viewproduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
