import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Features from './Features';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import ThreeDModel from './ThreeDModel';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <ThreeDModel />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
