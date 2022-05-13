import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

class App extends Component {
    c = ' john';
    render() {
        return (
            <div>
                Hello my first class based component{this.c}
            </div>
        );
    }
}

export default App;

