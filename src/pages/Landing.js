import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Selfie from '../img/lew1.png';
import CV from '../static/cv.pdf';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="jumbotron jumbotron-fluid custom">
              <div className="container custom">
                <img className="selfie animated fadeInDown" src={Selfie} alt="Logo" />
                <h1 className="display-4 animated bounce">Lewis Morgans</h1>
                <p className="lead animated bounce">Software Engineer</p>

                <a href={CV} download ><button type="button" className="btn btn-outline-primary">Download PDF</button> </a>
              </div>
            </div>
            <span className="badge badge-pill badge-primary">HTML5</span>
            <span className="badge badge-pill badge-secondary">CSS3</span>
            <span className="badge badge-pill badge-success">OO JS</span>
            <span className="badge badge-pill badge-danger">Bootstrap</span>
            <span className="badge badge-pill badge-warning">AGILE</span>
            <span className="badge badge-pill badge-info">Node.JS</span>
            <span className="badge badge-pill badge-light">Express</span><br />
            <span className="badge badge-pill badge-dark">GIT</span>
            <span className="badge badge-pill badge-success">Angular 2</span>
            <span className="badge badge-pill badge-danger">React</span>
            <span className="badge badge-pill badge-warning">MongoDB</span>
            <span className="badge badge-pill badge-info">ES6</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
