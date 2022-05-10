import React from 'react'
import propTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/*<Link className="nav-link active" aria-current="page" to="/">Home</Link>*/}
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>

                        {/*for github only */}
                        {/*<li className="nav-item">*/}
                        {/*    <Link className="nav-link" to="/about">{props.aboutText}</Link>*/}
                        {/*</li>*/}

                    </ul>
                    {/*<form className="d-flex">*/}
                    {/*    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>*/}
                    {/*    <button className="btn btn-dark" type="submit">Search</button>*/}
                    {/*</form>*/}



                    {/*Explanation: In the Parent className we have used Ternary Operators.
                        Ternary Operators are used for decision-making in place of longer if and else conditional statements.
                         We have used it to change the color of the text while changing the mode for better visibility.
                          A toggleMode function is assigned to the button which will be invoked on clicking the button.*/}
                    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>




                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
Navbar.propTypes = {
    title: propTypes.string,
    aboutText: propTypes.string,
};
Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
};