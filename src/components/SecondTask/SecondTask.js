import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import Films from '../Films/films';
import People from '../People/people';
import Planets from '../Planets/planets';
import Species from '../Species/species';
import Starships from '../Starships/starships';
import Vehicles from '../Vehicles/vehicles';
import './SecondTask.css'

class SecondTask extends Component {
   constructor(props){
      super(props);
   }

   render() {
      return (
      <div className="all-items">
      	<div className="all-items__header">
				<Link to="/DB2/second-task/films" className="remove-underline">
					<div className="second-task__link">Films</div>
				</Link>

				<Link to="/DB2/second-task/people" className="remove-underline">
					<div className="second-task__link">People</div>
				</Link>

				<Link to="/DB2/second-task/planets" className="remove-underline">
					<div className="second-task__link">Planets</div>
				</Link>

				<Link to="/DB2/second-task/species" className="remove-underline">
					<div className="second-task__link">Species</div>
				</Link>

				<Link to="/DB2/second-task/starships" className="remove-underline">
					<div className="second-task__link">Starships</div>
				</Link>

				<Link to="/DB2/second-task/vehicles" className="remove-underline">
					<div className="second-task__link">Vehicles</div>
				</Link>
       	</div>

			<Route path="/DB2/second-task/films" render={()=><Films data={this.props.data.films} />} />
			<Route path="/DB2/second-task/people" render={()=><People data={this.props.data.people} />} />
			<Route path="/DB2/second-task/planets" render={()=><Planets data={this.props.data.planets} />} />
			<Route path="/DB2/second-task/species" render={()=><Species data={this.props.data.species} />} />
			<Route path="/DB2/second-task/starships" render={()=><Starships data={this.props.data.starships} />} />
			<Route path="/DB2/second-task/vehicles" render={()=><Vehicles data={this.props.data.vehicles} />} />
      </div>
      );
   }
}

export default SecondTask;
