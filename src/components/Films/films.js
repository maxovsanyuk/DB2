import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './films.css'

class Films extends Component {
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
       <div className="films">
           Hello
       </div>
      );
    }
  }

  export default Films;
