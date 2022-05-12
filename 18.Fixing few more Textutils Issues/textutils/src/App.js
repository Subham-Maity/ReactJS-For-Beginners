import './App.css';
import Navbar from "./components/Navbar";
// import About from "./components/About";

import TextForm from "./components/TextForm";
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import ColorPallet from "./components/ColorPallet";


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

    const removeBodyClasses = ()=>{
        document.body.classList.remove('bg-light')
        document.body.classList.remove('bg-dark')
        document.body.classList.remove('bg-warning')
        document.body.classList.remove('bg-danger')
        document.body.classList.remove('bg-success')
    }
    const toggleMode = ()=>{
        removeBodyClasses();
        if(mode === 'light'){
            setMode('dark');//setMode('dark'); is a function that sets the state of mode to dark
            document.body.style.backgroundColor = '#182429';
            showAlert("Dark mode has been enabled", "success");
            document.title='TextUtils dark Mode';

        }
        else{
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert("Light mode has been enabled", "success");
            document.title='TextUtils light Mode';
        }
    }
    const toggleMode2 = (cls)=>{
        removeBodyClasses();
        console.log(cls)
        document.body.classList.add('bg-'+cls)
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#042743';
            showAlert("Dark mode has been enabled", "success");
        }
        else {
            setMode('light');
            showAlert("Light mode has been enabled", "success");
            document.title='TextUtils light Mode';
        }
    }


    return (
        <>
            {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
            {/* <Navbar/> */}
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}  />

                <Alert alert={alert}/>
                <div className="container my-3">
                    <Switch>
                        {/* /users --> Component 1
        /users/home --> Component 2 */}
                        <Route exact path="/about">
                            <About mode = {mode} />
                        </Route>
                        {/*<Route exact path="/">*/}
                            <TextForm showAlert={showAlert} heading="Try TextUtils - Just one click to make your document better!" mode={mode} toggleMode ={toggleMode}/>
                        {/*</Route>*/}
                    </Switch>
                    <ColorPallet showAlert={showAlert} heading="Color Palette " subHeading="As you wish, you can customize your background  " mode={mode} toggleMode2={toggleMode2} />
                </div>
            </Router>
        </>
    );
}

export default App;
