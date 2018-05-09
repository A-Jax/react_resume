import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
//import custom CSS
import './css/pages/Landing.css';
import './css/pages/About.css';
import './css/pages/Experience.css'
//import pages
import Landing from './pages/Landing'
import About from './pages/About'
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import Quals from './pages/Quals';
import Projects from './pages/Projects';
//import components
import Navbar from './components/Navbar'
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/qualifications" component={Quals} />
          <Route exact path="/projects" component={Projects} />
        </div>
       
      </Router>
    );
  }
}

export default App;
