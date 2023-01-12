import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Navbars from "./components/Navbar";

export default class App extends Component {

    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    <Switch>
                        {/*Remember, that we are using the <Route Exact path= “/” /> for the exact matching of the endpoint.*/}
                        {/*Point to be noted: React won’t render the NewsComponent again while navigating through different categories as it will render the NewsComponent for the first request.*/}
                        {/*But we want to rebound the News component with the Updated Props. To fix this issue we would add a unique key prop to every route*/}
                        <Route exact path="/"><News key="general" pageSize={5} country="in" category="general"/></Route>
                        <Route exact path="/business"><News key="business" pageSize={5} country="in" category="business"/></Route>
                        <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment"/></Route>
                        <Route exact path="/general"><News key="general" pageSize={5} country="in" category="general"/></Route>
                        <Route exact path="/health"><News key="health" pageSize={5} country="in" category="health"/></Route>
                        <Route exact path="/science"><News key="science" pageSize={5} country="in" category="science"/></Route>
                        <Route exact path="/sports"><News key="sports" pageSize={5} country="in" category="sports"/></Route>
                        <Route exact path="/technology"><News key="technology" pageSize={5} country="in" category="technology"/></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}



