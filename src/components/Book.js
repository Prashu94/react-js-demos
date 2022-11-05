import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Book.css';

class Book extends React.Component {
  state = {
    buttonClicked: false,
  };

  render = () => {
    let description = null;
    if (this.state.buttonClicked) {
      description = (
        <span>
          {this.props.book.summary}
          <br />
        </span>
      );
    }
    return (
      <div className="card" style={{ width: 300, height: 300 }}>
        <div className="card-body">
          <h5 className="card-title text-center">{this.props.book.title}</h5>
          <p className="card-text">
            <span>
              <b>Author: </b>
              {this.props.book.author}
            </span>
            <br />
            {description}
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

export default Book;
