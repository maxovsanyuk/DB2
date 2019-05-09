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
					<Link to="/DB2/home" className="remove-underline">
						<div className="header-link">Home</div>
					</Link>

					<Link to="/DB2/first-task" className="remove-underline">
						<div className="header-link first-task">First Task</div>
					</Link>

					<Link to="/DB2/second-task" className="remove-underline">
						<div className="header-link" data={this.props.data}>Second Task</div>
					</Link>

					<Route exact path="/DB2/home" component={Home} />
					<Route path="/DB2/first-task" component={FirstTask} />
					<Route path="/DB2/second-task" render={()=><SecondTask data={this.props.data} />} />
				</section>
			</Router>
		);
	}
}

export default Header;
