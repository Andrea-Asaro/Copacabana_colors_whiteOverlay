//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// bootstrap 

import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// componenti
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
// componenti

function App() {

  return (
    <Router>

      <Topbar/>
      <Navbar/>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>

      <Hero/>



    </Router>
  )
}

export default App
