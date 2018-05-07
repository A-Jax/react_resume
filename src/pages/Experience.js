import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Selfie from '../img/lew1.png';

class Experience extends Component {
  render() {
    return (
      <div className="landing container">

        <div class="card col-md-12">
          <div class="card-body">
            <h5 class="card-title">Keytree, Port Talbot— JavaScript Developer</h5>
            <p class="card-text">February 2018 - PRESENT</p>
          </div>
        </div>
        <div class="card col-md-12">
          <div class="card-body">
            <h5 class="card-title">Jax Web Studios, Port Talbot — Software Engineer/CEO </h5>
            <p class="card-text">June 2016 - February 2018</p>
          </div>
        </div>
        <div class="card col-md-12">
          <div class="card-body">
            <h5 class="card-title">AMEC, Llandarcy — Plant & Transport Officer </h5>
            <p class="card-text">October 2014 - October 2016</p>
          </div>
        </div>
        <div class="card col-md-12">
          <div class="card-body">
            <h5 class="card-title">Hargreaves, Port Talbot— Administrator </h5>
            <p class="card-text">March 2012 - October 2014</p>
          </div>
        </div>
        <div class="card col-md-12">
          <div class="card-body">
            <h5 class="card-title">WetherSpoons, Port Talbot— Bar Associate </h5>
            <p class="card-text">May 2010 - March 2012</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
