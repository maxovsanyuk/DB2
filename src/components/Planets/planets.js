import React, { Component } from 'react';
import './planets.css';

class Planets extends Component {
	constructor(props){
		super(props);
   }

   	render() {
		let allFilms = this.props.data.map((item, index) => {
			return(
				<section key={index} className="planet-section">
					<span className="name">Name: {item.name}</span>
					<span>Climate: {item.climate}</span>
					<span>Diameter: {item.diameter}</span>
					<span>Gravity: {item.gravity}</span>
					<span>Terrain: {item.terrain}</span>
               <span>Surface water: {item.surface_water}</span>
               <span>Rotation period: {item.rotation_period}</span>
				</section>
         )
		});

		return (
			<div>
				{ !this.props.data.length ? (
				<div className="second-preloader"></div>
				) : (
				<div className="planet">
					{allFilms}
				</div>
				)}
			</div>
		);
	}
}

export default Planets;
