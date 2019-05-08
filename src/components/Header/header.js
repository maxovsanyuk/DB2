import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './header.css';
import Home from '../Home/home';
import FirstTask from '../FirstTask/first-task';
import SecondTask from '../SecondTask/SecondTask';


class Header extends Component {

	render(){
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
						<div className="header-link" data={this.props.data}>Second Task</div>
					</Link>

					<Route exact path="/home" component={Home} />
					<Route path="/first-task" component={FirstTask} />
					<Route path="/second-task" render={()=><SecondTask data={this.props.data} />} />
				</section>
			</Router>
		);
	}
}

export default Header;
