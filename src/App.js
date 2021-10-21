import './App.css';
import ParticlesBg from 'particles-bg'
import Login from './login';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
      <ParticlesBg color="#166D3B" type="cobweb" bg={true} />
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
  );
}

export default App;
