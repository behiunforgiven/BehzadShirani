import React from 'react';

import Nav from './components/Nav';
import Intro from './components/Intro';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';


const App = () => {
  return (
      <>
        <Nav />
        <Intro />
        <About />
        <Services/>
        <Portfolio/>
        <Contact/>
    </>
  );
}

export default App;


