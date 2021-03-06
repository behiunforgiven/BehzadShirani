import React from "react";


const Intro = () => {

    return (
      <div
        id="home"
        className="intro route bg-image"
        style={{ backgroundImage: "url(/static/images/intro-bg-min.jpg)" }}
      >
        <div className="overlay-itro" />
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <img src="/static/images/Logo3.png" width="100" height="100" alt="Behzad Shirani"/>
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

  export default Intro;


