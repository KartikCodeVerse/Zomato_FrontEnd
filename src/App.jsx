import { useState } from "react";
import NavBar from "./Components/Navbar/NavBar";

import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import AddRes from "./Pages/AddRestaurant/AddRes";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/addres" exact element={<AddRes />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
