import React, { Component } from 'react';
import Flat from './components/flat.js';
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount(){
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    fetch(url) //AJAX
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data
        });
      })
  }
  render() {
    return (
    <div className="app">
      <div className="main">
        <div className="search">
         </div>
          <div className="flats">
        {this.state.flats.map((flat) => {
          return <Flat flat={flat} />
        })}
        </div>
        </div>
        <div className="map">
       </div>
    </div>
      //<div>
    //  <Flat flat={flat}  />
    //  <Flat flat={flat}  />
    //  </div>
    );
  }
}

export default App;
