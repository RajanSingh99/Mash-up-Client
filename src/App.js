import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Login from "./login";
import Navbar from "./Navbar.js";
import LoginPage from "./pages/LoginPage";
import Background from "./background";
import Home from "./Home";
import Signup from "./pages/SignUp";
import auth from "./services/auth";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            auth.isLoggedIn() ? <Navigate replace to="/" /> : <LoginPage />
          }
        />
        <Route
          path="/signup"
          element={auth.isLoggedIn() ? <Navigate replace to="/" /> : <Signup />}
        />
      </Routes>
    </Router>
  );
}

export default App;
