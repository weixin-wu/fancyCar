import React, { Component } from "react";
import logo from "./logo.svg";

import "./css/home.css";
import Car from "./components/carCard";

import { connect } from 'react-redux';


class App extends Component {
  constructor() {
    super();
    this.state = { results: [], backgroundImage: null };
  }
  componentDidMount() {
    var that = this;
    fetch("/cars")

      .then(res => {
        if (!res.ok) {
          return [];
        } else {
          return res.json();
        }
      })
      .then(cars => {
        that.setState({ results: cars });
      });
  }
  handleMouseEnter(i) {
    let result = this.state.results;
    this.setState({ backgroundImage: result[i].img });
  }
  handleMouseLeave() {
    this.setState({ backgroundImage: null });
  }
  render() {
    let that = this;
    let result = this.state.results;
    const carList = result.map((data, index) => {
      return (
        <Car
          onMouseLeave={that.handleMouseLeave.bind(this)}
          onMouseEnter={that.handleMouseEnter.bind(that, index)}
          key={index}
          car={data}
        />
      );
    });
    let divStyle = {
      backgroundImage: "url(" + this.state.backgroundImage + ")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover"
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FancyCar</h1>
          <div className="preview" style={divStyle} />
        </header>
        <div className="filter-container">asd</div>
        <div className="grid-container">{carList}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    car: state.hover
  }
}
export default App;
