import React, { Component } from 'react';
import './vehicles.css';

class Vehicles extends Component {

   	render() {
		let allFilms = this.props.data.map((item, index) => {
			return(
				<section key={index} className="vehicles-section">
					<span className="name">Name: {item.name}</span>
					<span>Model: {item.model}</span>
					<span>Vehicle class: {item.vehicle_class}</span>
               <span>Passengers: {item.passengers}</span>
					<span>Consumables: {item.consumables}</span>
					<span>Cargo capacity: {item.cargo_capacity}</span>
					<span>Cost in credits: {item.cost_in_credits}</span>
				</section>
         )
		});

		return (
			<div>
				{ !this.props.data.length ? (
				<div className="second-preloader"></div>
				) : (
				<div className="vehicles">
					{allFilms}
				</div>
				)}
			</div>
		);
	}
}

export default Vehicles;