import React, { Component } from 'react';
import Iframe from 'react-iframe'
import './first-task.css'

class FirstTask extends Component {

   render() {
      return (
			<Iframe url="https://maxovsanyuk.github.io/DB2-first-task/"
			loading= "lazy"
			className="home"
			display="initial"
			/>
      );
   }
}

export default FirstTask;
