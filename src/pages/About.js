import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Selfie from '../img/lew1.png';
import LinkedIn from '../img/linkedin.svg'
import Lewis from '../img/lew.png';
import Github from '../img/github.svg';


class About extends Component {
  render() {
    return (

      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div class="card wow fadeInDown" data-wow-delay=".4s">
                <div class="card-body">
                  <h4>BIO</h4>
                  <p>Hi, I'm Lewis, a FullStack JavaScript Developer...
                With several years of experience in the industry I provide a high dose of professional web solutions at competitive prices. I have developed many projects for small businesses, music groups and larger industries. My objectives are to develop bold and outstanding projects to fit your exact requirements. I'm highly professional and communicative, always delivering on time with a guarantee of 100% client satisfaction and project quality.
                What I Do ? I have been working as a freelance web developer for several years, I am dedicated to my profession, bringing artistic concepts to life through the medium of code. I excel at learning new technologies, and better approaches to projects, to deliver a project to a client, exceeding their expectations. I'm honest, responsible and always ready to take on a new challenge.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card wow fadeInUp" data-wow-delay="2.2s">
                <div className="card-body">
                  {/* <img className="selfie" src={Selfie} /> */}
                  <h4>Social Links</h4>
                  <a href="https://www.linkedin.com/in/lewismorgansengineer/" target="_blank"><img className="margin " src={LinkedIn} alt="Logo" />
                  </a>
                  <a href="https://www.jaxwebstudios.com/"><img className="margin" src={Lewis} alt="Logo" />
                  </a>
                  <a href="https://github.com/A-Jax"><img className="margin" src={Github} alt="Logo" /></a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card wow fadeInRight" data-wow-delay="1.6s">
                <div className="card-body">
                  {/* <img className="selfie" src={Selfie} /> */}
                  <h4>TECHNICAL SKILLS</h4>
                  <span className="badge badge-pill badge-primary">HTML5</span>
                  <span className="badge badge-pill badge-secondary">CSS3</span>
                  <span className="badge badge-pill badge-success">OO JS</span> <br />
                  <span className="badge badge-pill badge-danger">Bootstrap</span>
                  <span className="badge badge-pill badge-warning">AGILE</span>
                  <span className="badge badge-pill badge-info">Node.JS</span> <br />
                  <span className="badge badge-pill badge-light">Express</span>
                  <span className="badge badge-pill badge-dark">GIT</span>
                  <span className="badge badge-pill badge-info">ES6</span> <br />
                  <span className="badge badge-pill badge-success">Angular 2</span>
                  <span className="badge badge-pill badge-danger">React</span>
                  <span className="badge badge-pill badge-warning">MongoDB</span> <br />
                </div>
              </div>
            </div>
            <div className="col-md-12 mx-auto">
              <div className="card wow fadeInLeft" data-wow-delay="1s">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.031286428779!2d-3.168829384094292!3d51.475940020823764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486e1cca46ba39d1%3A0x38b68aca4a9d5a63!2sCardiff+CF10+4DW!5e0!3m2!1sen!2suk!4v1525804408977" height="300px" frameborder="0"
                  allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default About;
