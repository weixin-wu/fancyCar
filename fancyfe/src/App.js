import React, { Component } from "react";
import logo from "./logo.svg";

import "./css/home.css";
import Car from "./components/carCard";

import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = { results: [], backgroundImage: null };
  }
  componentDidMount() {
    var that = this;

    this.props.getCar();

  }

  handleMouseEnter(i) {
    //TODO:remove state
    // let result = this.state.results;
    // this.setState({ backgroundImage: result[i].img });
  }
  handleMouseLeave() {
    //TODO:remove state

    //this.setState({ backgroundImage: null });
  }
  render() {
    let that = this;
    let result = this.props.car.allCars;
    var carList = result.map((data, index) => {
      return (

        <Car
          onMouseLeave={that.handleMouseLeave.bind(this)}
          onMouseEnter={that.handleMouseEnter.bind(that, index)}
          key={index}
          car={data}
        />
      );
    });
    if (this.props.car.isError) {
      console.log("in the err")
      carList = <div className="server-error">Server error, please refresh the page</div>
    } else if (this.props.car.isLoading) {
      carList = <div className="server-loading">Loading cars from the server...</div>

    }
    console.log(carList)
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

const mapStateToProps = (state) => {
  return {
    car: state.carReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCar: () => {
      dispatch({ type: "LOADING", payload: null });

      axios.get('/cars')
        .then((response) => {
          dispatch({ type: "LOADED_CARS", payload: response.data });

        })
        .catch((err) => {
          console.log(err)
          dispatch({ type: "ERR", payload: err });

        })
    },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;

