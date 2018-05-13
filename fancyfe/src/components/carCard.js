import React from "react";
import "../css/carCard.css";
import ReactImageMagnify from "react-image-magnify";

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const car = this.props.car;
    return (
      <div className="car-container">
        <div className="left-right-container">
          <div className="left-container">
            <img
              onMouseLeave={this.props.onMouseLeave}
              onMouseEnter={this.props.onMouseEnter}
              src={car.img}
              border="0"
              alt="GT-_Sport-new_MY18"
            />
            {/* <ReactImageMagnify
              {...{
                enlargedImageContainerDimensions: {
                  width: '220%', height: '200%'
                },
                enlargedImagePosition: "over",
                smallImage: {
                  alt: "",
                  isFluidWidth: true,
                  
                  src: car.img
                },
                largeImage: { src: car.img, width: 800, height: 600 }
              }}
            /> */}
          </div>
          <div  className="right-container">
            <h2>{car.name}</h2>
            <div className="car-make">{car.make}</div>
            <div className="car-model">
              <span>Model: </span>
              {car.model}
            </div>
            <div className="car-year">
              <span>Year: </span>
              {car.year}
            </div>
            <div className="car-availability">
              <span>Available: </span>
              {"unknown"}
            </div>
            <div className="buy-button">Buy</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Car;
