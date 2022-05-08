import './App.css';
import Navbar from "./components/Navbar";
// import About from "./components/About";

import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";


function App() {

    const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
    const [alert, setAlert] = useState(null);//setAlert sets the alert variable
    const showAlert = (message, type)=>{  // showAlert that helps to show the message
     setAlert({
         msg: message,
         type: type
     })
     setTimeout(()=>{
         setAlert(null);
     }, 1749);
    }

    const toggleMode = ()=>{
        if(mode === 'light'){
            setMode('dark');//setMode('dark'); is a function that sets the state of mode to dark
            document.body.style.backgroundColor = '#182429';
            showAlert("Dark mode has been enabled", "success");
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
        }
    }
  return (
      <>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
            {/*here alert is set to the alert variable const [alert, setAlert]*/}
          <Alert alert = {alert}/>
          <div className="container my-3">
          <TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode = {mode} />
        {/*<About/>*/}



          </div>
      </>
  );
}

export default App;
