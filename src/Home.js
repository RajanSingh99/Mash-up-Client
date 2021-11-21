import React from 'react'

import './Home.css';

import Login from './login';
import Navbar from './Navbar.js';
import Background from './background';

export default function Home(props) {
    

    return (
        <div className="App">
      <Background/>
      <div className="Header">
        <h1>Mash<span className="span">UP</span></h1>
        <Navbar/>
      </div>
      <div className="body">
        <Login/>
        <div className="body-text">
          <h1><span style={{color:"#166D3B",fontSize:100}}>One</span> Destination for all your entertainment Needs!</h1>
          <h2>starting at just<span style={{fontSize:100}}>₹</span> <span style={{color:"#166D3B",fontSize:100}}>79</span> per month</h2>
        </div>
      </div>
      </div>
    )
}
