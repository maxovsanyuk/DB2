import React, { Component } from 'react';
import './species.css';

class Species extends Component {
	constructor(props){
		super(props);
		console.log(props)
   }

   	render() {
		let allFilms = this.props.data.map((item, index) => {
			return(
				<section key={index} className="species-section">
					<span className="name">Name: {item.name}</span>
               <span>Language: {item.language}</span>
					<span>Average height: {item.average_height}</span>
					<span>Average lifespan: {item.average_lifespan}</span>
					<span>Classification: {item.classification}</span>
					<span>Skin colors: {item.skin_colors}</span>
               <span>Designation: {item.designation}</span>
				</section>
         )
		});

		return (
			<div>
				{ !this.props.data.length ? (
				<div className="second-preloader"></div>
				) : (
				<div className="species">
					{allFilms}
				</div>
				)}
			</div>
		);
	}
}

export default Species;
