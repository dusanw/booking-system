import React from 'react';
import '../css/intro.css'; // Import the CSS file if you have one for this component

function Intro() {
  return (
    <div className="intro">
      <div className="wrap">
        <div className="textwidget">
          <h1 className="wow fadeInDown">Need a ride?</h1>
          <h2 className="wow fadeInUp">Enjoy it, we drive!</h2>
          <div className="actions">
            <a href="#services" title="Our services" className="btn large white wow fadeInLeft anchor">
              Our Services
            </a>
            <a href="#booking" title="Make a booking" className="btn large color wow fadeInRight anchor">
              Book Your Trip
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
