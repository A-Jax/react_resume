import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Selfie from '../img/lew1.png';


class Projects extends Component {
    render() {
        return (
            <div className="landing container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card wow fadeInDown" data-wow-delay=".8s">
                            <div className="card-body ">
                                <h5 className="card-title">Greater London Authority</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Lead UI Developer for Keytree</h6>
                                <p className="card-text">Acting as the lead user interface developer for the project, using
                                Angular.JS framework.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card  wow fadeInDown" data-wow-delay=".8s">
                            <div className="card-body ">
                                <h5 className="card-title">JD Wetherspoon</h5>
                                <h6 className="card-subtitle mb-2 text-muted">UI Developer for Keytree</h6>
                                <p className="card-text">Working in a AGILE team of developers to deliver an interactive software application for internal business use. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card  wow fadeInLeft" data-wow-delay="1.2s">
                            <div className="card-body ">
                                <a href="https://gameshorts.herokuapp.com/about" target="_blank"><h5 className="card-title">GameShorts</h5></a>
                                <h6 className="card-subtitle mb-2 text-muted">Lead Software Engineer/CEO</h6>
                                <p className="card-text">A web based video sharing application. A place for gamers to share their favourite personal videos with a targeted audience. </p>


                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card  wow fadeInRight" data-wow-delay="1.2s">
                            <div className="card-body ">
                                <h5 className="card-title">Jotter</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Lead Software Engineer/CEO</h6>
                                <p className="card-text">A personal note taking application built in Angular 4, Node.js, Express,
                                    and Google Firestore. A private space to write.
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card  wow fadeInUp" data-wow-delay="1.6s">
                            <div className="card-body ">
                                <h5 className="card-title">Content Management</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Lead Software Engineer</h6>
                                <p className="card-text">On going project in early alpha stage. A custom web portal to be shipped
                                                        with all Jax Web Studios projects.
                                                        </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card  wow fadeInUp" data-wow-delay="1.6s">
                            <div className="card-body ">
                                <h5 className="card-title">AutoScroll</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Lead Software Engineer</h6>
                                <p className="card-text">The function can be dropped into any HTML file and does not
                                        require any alterations. Plug & Play.
                                        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
