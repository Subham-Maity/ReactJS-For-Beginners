import logo from './logo.svg';
import './App.css';
import React from './react.gif';
let name = "Subham"


function App() {
  return (
      <>
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
        </nav>
        <div className="container">
          <h1>Hello {name}</h1>
          <p>I'm CodeXam</p>
        </div>
          <img src={React} alt="Logo" />;

      </>
  );
}

export default App;
