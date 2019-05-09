import React, { Component } from 'react';
import './people.css';

class People extends Component {

   	render() {
		let allFilms = this.props.data.map((item, index) => {
			return(
				<section key={index} className="people-section">
					<span className="name">Name: {item.name}</span>
					<span>Gender: {item.gender}</span>
					<span>Mass: {item.mass}</span>
					<span>Hair color: {item.hair_color}</span>
					<span>Eye color: {item.eye_color}</span>
				</section>
			)
		});

		return (
			<div>
				{ !this.props.data.length ? (
				<div className="second-preloader"></div>
				) : (
				<div className="people">
					{allFilms}
				</div>
				)}
			</div>
		);
	}
}

export default People;


