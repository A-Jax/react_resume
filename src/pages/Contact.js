import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Landing extends Component {
  render() {
    return (
      <div className="landing container animated fadeInUp">
        <form>
          <div className="form-group">
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Subject" />
          </div>
          <div className="form-group">
            <textarea rows="8"className="form-control contact" placeholder="Your Message ..."></textarea>
          </div>
          <small id="emailHelp" className="form-text text-muted">Your email will not be shared with anyone other than Lewis Morgans</small><br />
          <button type="submit" className="btn btn-info btn-block">Send</button>
          
        </form>
      </div>
    );
  }
}

export default Landing;
