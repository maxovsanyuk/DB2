import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './header.css';
import Home from '../Home/home';
import FirstTask from '../FirstTask/first-task';
import SecondTask from '../SecondTask/SecondTask';


function Header(){

    return (
      <Router>
        <section className="header">
            <Link to="/home" className="remove-underline">
                <div className="header-link">Home</div>
            </Link>

            <Link to="/first-task" className="remove-underline">
                <div className="header-link">First Task</div>
            </Link>

            <Link to="/second-task" className="remove-underline">
                <div className="header-link">Second Task</div>
            </Link>

            <Route exact path="/home" component={Home} />
            <Route path="/first-task" component={FirstTask} />
            <Route path="/second-task" component={SecondTask} />
        </section>
      </Router>
    );
}

export default Header;
