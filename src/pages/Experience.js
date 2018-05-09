import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Selfie from '../img/lew1.png';

class Experience extends Component {
  render() {
    return (
      <div className="landing container">

        <div className="card col-md-12 wow fadeInLeft" data-wow-delay=".8s">
          <div className="card-body">
            <h5 className="card-title">Keytree, Port Talbot— JavaScript Developer</h5>
            <p className="card-text">February 2018 - PRESENT</p>
          </div>
        </div>
        <div className="card col-md-12 wow fadeInRight" data-wow-delay="1.4s">
          <div className="card-body">
            <h5 className="card-title">Jax Web Studios, Port Talbot — Software Engineer/CEO </h5>
            <p className="card-text">June 2016 - February 2018</p>
          </div>
        </div>
        <div className="card col-md-12 wow fadeInLeft" data-wow-delay="1.8s">
          <div className="card-body">
            <h5 className="card-title">AMEC, Llandarcy — Plant & Transport Officer </h5>
            <p className="card-text">October 2014 - October 2016</p>
          </div>
        </div>
        <div className="card col-md-12 wow fadeInRight" data-wow-delay="2.2s">
          <div className="card-body">
            <h5 className="card-title">Hargreaves, Port Talbot— Administrator </h5>
            <p className="card-text">March 2012 - October 2014</p>
          </div>
        </div>
        <div className="card col-md-12 wow fadeInLeft" data-wow-delay="2.6s">
          <div className="card-body">
            <h5 className="card-title">WetherSpoons, Port Talbot— Bar Associate </h5>
            <p className="card-text">May 2010 - March 2012</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
