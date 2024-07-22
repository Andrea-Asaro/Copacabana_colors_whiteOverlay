import { NavLink } from 'react-router-dom';

import logo from '../media/logo.png';
import './Navbar.css'



export default function Navbar(){

    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg1 px-4 px-lg-5 py-3 py-lg-0">
            <a href="/" className="navbar-brand p-0 mb-lg-2 ms-lg-5 ps-lg-5">
                <img src={logo} alt="Logo" className='ps-lg-2'/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <i className="bi bi-list-nested fs-1 text-a"></i>
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
                <div className="navbar-nav ms-auto me-lg-5 pe-lg-5 py-0">
                    <NavLink className="nav-item nav-link mb-1 mb-lg-0" to="/" end>Home</NavLink>
                    <NavLink className="nav-item nav-link mb-1 mb-lg-0" to="/about">Colors</NavLink>
                    <NavLink className="nav-item nav-link mb-1 mb-lg-0" to="/contact">Contact Us</NavLink>
                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu m-0">
                            <a href="appointment.html" className="dropdown-item">Appointment</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}