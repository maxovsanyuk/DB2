import React, { Component } from 'react';
import Modal from '../Modal/modal';
import './films.css';

class Films extends Component {
		constructor(props){
		super(props);
		this.state = {
			characters: [],
			planets: [],
			species: [],
			starships: [],
			vehicles: [],
			opening_crawl: [],
			removeModal: () => {
				this.setState({
					characters: [],
					planets: [],
					species: [],
					starships: [],
					vehicles: [],
					opening_crawl: [],
				})
				document.getElementById('modal').style.display = "none";
			},
			sortUpCharacters: () => {
				this.setState({
					characters: this.state.characters.sort((a, b) => {
						if (a.name < b.name) {
							return -1;
						}else{
							return 1;
						}
					})
				})
			},
			sortDawnCharacters: () => {
				this.setState({
					characters: this.state.characters.sort((a, b) => {
						if (a.name < b.name) {
							return 1;
						}else{
							return -1;
						}
					})
				})
			},
			searchCharacters: (e) => {
				this.setState({
					characters: this.state.characters.filter( item => {
						return item.name.includes(e.target.value)
					})
				})
			},
			  sortUpPlanets: () => {
				this.setState({
					planets: this.state.planets.sort((a, b) => {
						if (a.name < b.name) {
							return -1;
						}else{
							return 1;
						}
					})
				})
			},
			sortDawnPlanets: () => {
				this.setState({
					planets: this.state.planets.sort((a, b) => {
						if (a.name < b.name) {
							return 1;
						}else{
							return -1;
						}
					})
				})
			  },
			  searchPlanets: (e) => {
				this.setState({
					planets: this.state.planets.filter( item => {
						return item.name.includes(e.target.value)
					})
				})
			},
			sortUpSpecies: () => {
				this.setState({
					species: this.state.species.sort((a, b) => {
						if (a.name < b.name) {
							return -1;
						}else{
							return 1;
						}
					})
				})
			},
			sortDawnSpecies: () => {
				this.setState({
					species: this.state.species.sort((a, b) => {
						if (a.name < b.name) {
							return 1;
						}else{
							return -1;
						}
					})
				})
			},
			searchSpecies: (e) => {
				this.setState({
					species: this.state.species.filter( item => {
						return item.name.includes(e.target.value)
					})
				})
			},
			sortUpStarships: () => {
				this.setState({
					starships: this.state.starships.sort((a, b) => {
						if (a.name < b.name) {
							return -1;
						}else{
							return 1;
						}
					})
				})
			},
			sortDawnStarships: () => {
				this.setState({
					starships: this.state.starships.sort((a, b) => {
						if (a.name < b.name) {
							return 1;
						}else{
							return -1;
						}
					})
				})
			},
			searchStarships: (e) => {
				this.setState({
					starships: this.state.starships.filter( item => {
						return item.name.includes(e.target.value)
					})
				})
			},
			sortUpVehicles: () => {
				this.setState({
					vehicles: this.state.vehicles.sort((a, b) => {
						if (a.name < b.name) {
							return -1;
						}else{
							return 1;
						}
					})
				})
			},
			sortDawnVehicles: () => {
				this.setState({
					vehicles: this.state.vehicles.sort((a, b) => {
						if (a.name < b.name) {
							return 1;
						}else{
							return -1;
						}
					})
				})
			},
			searchVehicles: (e) => {
				this.setState({
					vehicles: this.state.vehicles.filter( item => {
						return item.name.includes(e.target.value)
					})
				})
			},
		}
	}

	getMoreData({target}){
		const characters = target.getAttribute('data-characters').split(',');
		const planets = target.getAttribute('data-planets').split(',');
		const species = target.getAttribute('data-species').split(',');
		const starships = target.getAttribute('data-starships').split(',');
		const vehicles = target.getAttribute('data-vehicles').split(',');
		const opening_crawl = target.getAttribute('data-opening_crawl');

		characters.map(item => {
			fetch(item)
			.then(response => response.json())
			.then(characters => {
				this.setState({
					characters: this.state.characters.concat(characters),
					opening_crawl: opening_crawl,
				})
			})
		})

		planets.map(item => {
			fetch(item)
			.then(response => response.json())
			.then(planets => {
				this.setState({
					planets: this.state.planets.concat(planets),
				})
			})
		})

		species.map(item => {
			fetch(item)
			.then(response => response.json())
			.then(species => {
				this.setState({
					species: this.state.species.concat(species),
				})
			})
		})

		starships.map(item => {
			fetch(item)
			.then(response => response.json())
			.then(starships => {
				this.setState({
					starships: this.state.starships.concat(starships),
				})
			})
		})

		vehicles.map(item => {
			fetch(`${item}`)
			.then(response => response.json())
			.then(vehicles => {
				this.setState({
					vehicles: this.state.vehicles.concat(vehicles),
				})
			})
		})

		document.getElementById('modal').style.display = "flex";
	}

    render() {

		let allFilms = this.props.data.map((item, index) => {
			return(
				<section key={index} className="film-section">
					<div className="title">{item.title}</div>
					<span className="release-date">Release date: {item.release_date}</span>
					<h4>Producer :{item.producer}</h4>

					<button
						className="more-info"
						data-characters = {item.characters}
						data-planets = {item.planets}
						data-species = {item.species}
						data-starships = {item.starships}
						data-vehicles = {item.vehicles}
						data-opening_crawl = {item.opening_crawl}
						onClick = {this.getMoreData.bind(this)}>Get more information</button>
				</section>
			)
		});

      return (
			<div>
				{ !this.props.data.length ? (
				<div className="second-preloader"></div>
				) : (
				<div className="films">
					{allFilms}
					<Modal data={this.state} />
				</div>
				)}
			</div>
      	);
    }
}

export default Films;
