import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Iframe from 'react-iframe'
import './home.css'

class Home extends Component {
    constructor(props){
      super(props);
    }


    // componentDidMount() {
    //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //   const url = 'http://swapi.co/api/films';
    //   fetch(proxyurl + url)
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({
    //       data: data.results,
    //       isLoaded: true,
    //     })
    //     console.log(this.state.data);
    //   })
    // }


    render() {
      return (
        <div className="home"></div>
        // <Iframe url="https://maxovsanyuk.github.io/DB2"
        // loading= "lazy"
        // className="home"
        // display="initial"
        // />
      );
    }
  }

  export default Home;
