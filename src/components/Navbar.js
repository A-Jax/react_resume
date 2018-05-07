import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          {/* <Link className="navbar-brand" to="/">
            [Your Name Here]
          </Link> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {' '}
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/experience">
                  {' '}
                  Work Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/qualifications">
                  {' '}
                  Recent Projects / GISTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/qualifications">
                  {' '}
                  Qualifications
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  {' '}
                  Contact Me!
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
