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
import Footer from './components/Footer';

// componenti

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/Copacabana_Colors__React' : '';

  return (
    <Router basename={basename}>

      <Topbar/>
      <Navbar/>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>

    <Footer/>
    </Router>
  )
}

export default App
