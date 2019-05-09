import React,{ Component } from 'react';
import './modal.css';


class Modal extends Component {
	constructor(props){
        super(props);
	}

	render(){

        let characters = this.props.data.characters.map((item, index )=> {
            return(
                <div className="characters-items" key={index}>{item.name}</div>
            )
        })

        let planets = this.props.data.planets.map((item, index )=> {
            return(
                <div className="planets-items" key={index}>{item.name}</div>
            )
        })

        let species = this.props.data.species.map((item, index )=> {
            return(
                <div className="species-items" key={index}>{item.name}</div>
            )
        })

        let starships = this.props.data.starships.map((item, index )=> {
            return(
                <div  className="starships-items" key={index}>{item.name}</div>
            )
        })

        let vehicles = this.props.data.vehicles.map((item, index )=> {
            return(
                <div className="vehicles-items" key={index}>{item.name}</div>
            )
        })

		return (
            <div className="modal" id="modal">
                <span className="overview">Overview:</span>
                <div className="overview-content">{this.props.data.opening_crawl}</div>
                <div className="characters-container">
                    <span className="characters">Characters:</span>
                    <div className="sort-name">
                        <span>Sort by Name: </span>
                        <label>
                            <span className="sort-title">Top</span>
                            <input className="name-input" type="radio" name="characters" onClick={this.props.data.sortUpCharacters}></input>
                        </label>
                        <label>
                            <span className="sort-title">Dawn</span>
                            <input className="name-input" type="radio" name="characters" onClick={this.props.data.sortDawnCharacters}></input>
                        </label>
                    </div>
                    <div className="sort-name">
                        <input type="search" className="search" placeholder="Search..." onChange={this.props.data.searchCharacters}></input>
                    </div>
                    <div className="container">{characters}</div>
                </div>
                <div className="planets-container">
                    <span className="characters">Planets:</span>
                    <div className="sort-name">
                        <span>Sort by Name: </span>
                        <label>
                            <span className="sort-title">Top</span>
                            <input className="name-input" type="radio" name="planets" onClick={this.props.data.sortUpPlanets}></input>
                        </label>
                        <label>
                            <span className="sort-title">Dawn</span>
                            <input className="name-input" type="radio" name="planets" onClick={this.props.data.sortDawnPlanets}></input>
                        </label>
                    </div>
                    <div className="sort-name">
                        <input type="search" className="search" placeholder="Search..." onChange={this.props.data.searchPlanets}></input>
                    </div>
                    <div className="container">{planets}</div>
                </div>
                <div className="species-container">
                    <span className="species-title">Species:</span>
                    <div className="sort-name">
                        <span>Sort by Name: </span>
                        <label>
                            <span className="sort-title">Top</span>
                            <input className="name-input" type="radio" name="species" onClick={this.props.data.sortUpSpecies}></input>
                        </label>
                        <label>
                            <span className="sort-title">Dawn</span>
                            <input className="name-input" type="radio" name="species" onClick={this.props.data.sortDawnSpecies}></input>
                        </label>
                    </div>
                    <div className="sort-name">
                        <input type="search" className="search" placeholder="Search..." onChange={this.props.data.searchSpecies}></input>
                    </div>
                    <div className="container">{species}</div>
                </div>
                <div className="starships-container">
                    <span className="starships-title">Starships:</span>
                    <div className="sort-name">
                        <span>Sort by Name: </span>
                        <label>
                            <span className="sort-title">Top</span>
                            <input className="name-input" type="radio" name="starships" onClick={this.props.data.sortUpStarships}></input>
                        </label>
                        <label>
                            <span className="sort-title">Dawn</span>
                            <input className="name-input" type="radio" name="starships" onClick={this.props.data.sortDawnStarships}></input>
                        </label>
                    </div>
                    <div className="sort-name">
                        <input type="search" className="search" placeholder="Search..." onChange={this.props.data.searchStarships}></input>
                    </div>
                    <div className="container">{starships}</div>
                </div>
                <div className="starships-container">
                    <span className="vehicles-title">Vehicles:</span>
                    <div className="sort-name">
                        <span>Sort by Name: </span>
                        <label>
                            <span className="sort-title">Top</span>
                            <input className="name-input" type="radio" name="vehicles" onClick={this.props.data.sortUpVehicles}></input>
                        </label>
                        <label>
                            <span className="sort-title">Dawn</span>
                            <input className="name-input" type="radio" name="vehicles" onClick={this.props.data.sortDawnVehicles}></input>
                        </label>
                    </div>
                    <div className="sort-name">
                        <input type="search" className="search" placeholder="Search..." onChange={this.props.data.searchVehicles}></input>
                    </div>
                    <div className="container">{vehicles}</div>
                </div>
                <button  className="close-btn" onClick={this.props.data.removeModal}></button>
            </div>
		);
	}
}

export default Modal;
