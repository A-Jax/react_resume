import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Selfie from '../img/lew1.png';

class Quals extends Component {
  render() {
    return (
      <div className="landing container">

        <div className="card col-md-12 wow fadeInDown" data-wow-delay="0.4s">
          <div className="card-body">
            <h5 className="card-title">Udacity/Google — Nanodegree</h5>
            <p className="card-text">Mobile Web Specialist Nanodegree, taught by Udacity in collaboration
                                 with Google.</p>
            <small>2017 - PRESENT</small>
          </div>
        </div>
        <div className="card col-md-12 wow fadeInDown" data-wow-delay="1s">
          <div className="card-body">
            <h5 className="card-title">Cynffig Sixthform College, Kenfig Hill— A Levels</h5>
            <p className="card-text">ICT /
                                Business</p>
            <small>2008 - 2010 </small>
          </div>
        </div>
        <div className="card col-md-12 wow fadeInDown" data-wow-delay="1.6s">
          <div className="card-body">
            <h5 className="card-title">Cynffig Comprehensive School, Kenfig Hill— GCSE </h5>
            <p className="card-text">Maths /
                                English Literature /
                                English Language /
                                Science 1 /<br />
                                              Science 2 /
                                Design in Digital Applications</p>
            <small> 2003 - 2008 </small>
          </div>
        </div>

      </div>
    );
  }
}

export default Quals;
