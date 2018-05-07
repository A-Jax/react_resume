import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Selfie from '../img/lew1.png';


class About extends Component {
  render() {
    return (
      <div className="landing container">
        <div className="row">
          <div className="col-md-8">
            <div class="card animated fadeInLeft">
              <div class="card-body">
                <h4>BIO</h4>
                <p>Hi, I'm Lewis, a FullStack JavaScript Developer...
                With several years of experience in the industry I provide a high dose of professional web solutions at competitive prices. I have developed many projects for small businesses, music groups and larger industries. My objectives are to develop bold and outstanding projects to fit your exact requirements. I'm highly professional and communicative, always delivering on time with a guarantee of 100% client satisfaction and project quality.
                What I Do ? I have been working as a freelance web developer for several years, I am dedicated to my profession, bringing artistic concepts to life through the medium of code. I excel at learning new technologies, and better approaches to projects, to deliver a project to a client, exceeding their expectations. I'm honest, responsible and always ready to take on a new challenge.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card animated fadeInRight">
              <div className="card-body">
              {/* <img className="selfie" src={Selfie} /> */}
                <h4>TECHNICAL SKILLS</h4>
                <p>HTML5, CSS3, OO JavaScript,
                JSON, Bootstrap, Node.js,
                Express, MongoDB,
                Mongoose, Angular 2,
                Angular 4, Angular 5, Google
                Firestore, Agile, ES6, MEAN
                STACK, GIT.</p>
              </div>
            </div>

          </div>
        </div>
        {/* <div className="row"> */}
      
        {/* </div> */}

      </div>
    );
  }
}

export default About;
