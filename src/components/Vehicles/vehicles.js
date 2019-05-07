import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Vehicles extends Component {
    constructor(props){
      super(props);
      this.state = {
        data : [],
        isLoaded: false,
      }
    }


    componentDidMount() {
      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      const url = 'http://swapi.co/api/films';
      fetch(proxyurl + url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          data: data.results,
          isLoaded: true,
        })
        console.log(this.state.data);
      })
    }


    render() {
      return (
       <div>
           Hello5
       </div>
      );
    }
  }

  export default Vehicles;