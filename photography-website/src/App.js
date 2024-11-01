// src/App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Payment from "./components/Payment";
import Shop from "./components/Shop";
import CTA from "./components/CTA";
import NotFound from "./components/NotFound";
import Login from "./components/Login";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Handle login
  const handleLogin = (email, password) => {
    const defaultEmail = "shakti@gmail.com";
    const defaultPassword = "123";
    if (email === defaultEmail && password === defaultPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/payment"
            element={isAuthenticated ? <Payment /> : <Navigate to="/login" />}
          />
          <Route
            path="/shop"
            element={isAuthenticated ? <Shop /> : <Navigate to="/login" />}
          />
          <Route
            path="/contact"
            element={isAuthenticated ? <CTA /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer onLogout={handleLogout} isAuthenticated={isAuthenticated} />
      </div>
    </Router>
  );
}

export default App;
