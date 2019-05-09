import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from '../Header/header';


class App extends Component {
	constructor(props){
   		super(props);
   		this.state = {
			films : [],
			people: [],
			planets: [],
			species: [],
			starships: [],
			vehicles: [],
			isLoaded: false,
		}
	}


  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const filmsUrl = 'http://swapi.co/api/films';
    let films = fetch(proxyurl + filmsUrl)
    .then(response => response.json())
    .then(films => {
		this.setState({
			films: films.results,
		})
    })

   const peopleUrl = 'http://swapi.co/api/people';
   let people = fetch(proxyurl + peopleUrl)
   .then(response => response.json())
   .then(people => {
		this.setState({
			people: people.results,
		})
   })

   const planetsUrl = 'http://swapi.co/api/planets';
   let planets = fetch(proxyurl + planetsUrl)
   .then(response => response.json())
   .then(planets => {
		this.setState({
			planets: planets.results,
		})
   })

   const speciesUrl = 'http://swapi.co/api/species';
   let species = fetch(proxyurl + speciesUrl)
   .then(response => response.json())
   .then(species => {
		this.setState({
			species: species.results,
		})
   })

   const starshipsUrl = 'http://swapi.co/api/starships';
   let starships = fetch(proxyurl + starshipsUrl)
   .then(response => response.json())
   .then(starships => {
		this.setState({
			starships: starships.results,
		})
   })

   const vehiclesUrl = 'http://swapi.co/api/vehicles';
   let vehicles = fetch(proxyurl + vehiclesUrl)
   .then(response => response.json())
   .then(vehicles => {
		this.setState({
			vehicles: vehicles.results,
		})
   })

   Promise.all([films, people, planets, species, starships, vehicles]).then( () => {
		this.setState({
			isLoaded: true,
		})
  	});
}

  	render() {
		return (
			<Router>
				{ this.state.isLoaded ? (
				<section className="init-section">
					<Header data={this.state} />
				</section>
				) : (
				<div className="preloader"></div>
				)}
			</Router>
    	);
  	}
}

export default App;
