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
      console.log(props);
    }

    render() {
      return (
       <div className="films">
       <div className="q">
       <Link to="/second-task/films">
        	<div>Films</div>
        </Link>

        <Link to="/second-task/people">
          <div>People</div>
        </Link>

        <Link to="/second-task/planets">
          <div>Planets</div>
        </Link>

        <Link to="/second-task/species">
          <div>Species</div>
        </Link>

        <Link to="/second-task/starships">
          <div>Starships</div>
        </Link>

        <Link to="/second-task/vehicles">
          <div>Vehicles</div>
        </Link>
       </div>

        <Route path="/second-task/films" component={Films} />
        <Route path="/second-task/people" component={People} />
        <Route path="/second-task/planets" component={Planets} />
        <Route path="/second-task/species" component={Species} />
        <Route path="/second-task/starships" component={Starships} />
        <Route path="/second-task/vehicles" component={Vehicles} />
       </div>
      );
    }
  }

  export default SecondTask;
