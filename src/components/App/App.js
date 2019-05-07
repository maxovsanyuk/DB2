import React, { Component, Fragment } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [],
      isLoaded: false,
    }
  }


  componentDidMount() {
    fetch('http://swapi.co/api/people/1/')
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
      <Fragment>
          { this.state.isLoaded ? (
          <div>Hello</div>
        ) : (
          <div>Loading...</div>
        )}
      </Fragment>
    );
  }
}

export default App;
