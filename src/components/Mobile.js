import React from 'react';
import './Mobile.css';
import 'bootstrap/dist/css/bootstrap.css';

class Mobile extends React.Component {
  state = {
    buttonClicked: false,
  };

  render = () => {
    let ram = null;
    let camera = null;
    let processor = null;
    if (this.state.buttonClicked) {
      ram = (
        <span>
          RAM: {this.props.mobile.ram} <br />
        </span>
      );
      camera = (
        <span>
          Camera: {this.props.mobile.camera} <br />
        </span>
      );
      processor = (
        <span>
          Processor: {this.props.mobile.processor}
          <br />
        </span>
      );
    }

    return (
      <div className="card" style={{ width: 300, height: 250 }}>
        <div className="card-body">
          <p className="card-text">
            <span>Model: {this.props.mobile.model}</span>
            <br />
            <span>Price: {this.props.mobile.price}</span>
            <br />
            {ram}
            {camera}
            {processor}
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.setState({ buttonClicked: true })}
          >
            Show Details
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.setState({ buttonClicked: false })}
          >
            Hide Details
          </button>
        </div>
      </div>
    );
  };
}

export default Mobile;
