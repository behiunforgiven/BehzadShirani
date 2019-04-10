import React, { Component } from "react";

import IntroBackground from '../images/intro-bg-min.jpg';

class Intro extends Component {
  state = {};
  render() {
    return (
      <div
        id="home"
        className="intro route bg-image"
        style={{ backgroundImage: `url(${IntroBackground})` }}
      >
        <div className="overlay-itro" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">I am Behzad Shirani</h1>
              <p className="intro-subtitle">
                <strong className="text-slider" >Software Developer</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
