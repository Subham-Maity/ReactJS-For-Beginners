import './App.css';
import Navbar from "./components/Navbar";
// import About from "./components/About";

import TextForm from "./components/TextForm";
import React, { useState } from 'react';


function App() {
    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

    const toggleMode = ()=>{
        if(mode === 'light'){
            setMode('dark');//setMode('dark'); is a function that sets the state of mode to dark
            document.body.style.backgroundColor = '#182429';
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }
  return (
      <>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

          <div className="container my-3">
        <TextForm heading="Enter the text to analyze" mode = {mode} />
        {/*<About/>*/}
          </div>
      </>
  );
}

export default App;
