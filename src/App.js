import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Routes } from 'react-router';

import Login from './login';
import Navbar from './Navbar.js';
import LoginPage from './components/loginPage';
import Background from './background';
import Home from './Home';
import Signup from './components/signUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
