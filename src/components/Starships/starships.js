import React, { Component } from 'react';
import './starships.css';

class Starships extends Component {
	constructor(props){
		super(props);
   }

   	render() {
		let allFilms = this.props.data.map((item, index) => {
			return(
				<section key={index} className="starships-section">
					<span className="name">Name: {item.name}</span>
					<span>Model: {item.model}</span>
					<span>Starship class: {item.starship_class}</span>
               <span>Passengers: {item.passengers}</span>
					<span>Consumables: {item.consumables}</span>
					<span>Cargo capacity: {item.cargo_capacity}</span>
					<span>Length: {item.length}</span>
				</section>
         )
		});

		return (
			<div>
				{ !this.props.data.length ? (
				<div className="second-preloader"></div>
				) : (
				<div className="starships">
					{allFilms}
				</div>
				)}
			</div>
		);
	}
}

export default Starships;
