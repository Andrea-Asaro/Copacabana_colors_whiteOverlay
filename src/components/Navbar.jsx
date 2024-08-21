import { NavLink } from 'react-router-dom';
import { useState } from "react"

import logo from '../media/logo.png';
import './Navbar.css'



export default function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg1 px-4 px-lg-5 py-3 py-lg-0">
            <NavLink to="/" className="navbar-brand p-0 mb-lg-2 ms-lg-5 ps-lg-5">
                <img src={logo} alt="Logo" className='ps-lg-2'/>
            </NavLink>
            <button 
            onClick={()=>setIsOpen(!isOpen)} 
            className={`navbar-toggler border-0 ${isOpen? "navbar-togglerOpen":""} `} 
            type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <i className="bi bi-list-nested fs-1 text-a"></i>
            </button>
            <div className="collapse navbar-collapse " id="navbarCollapse">
                <div className="navbar-nav ms-auto me-lg-5 pe-lg-5 py-0">
                    <NavLink className="nav-item nav-link text3 font2 mb-1 mb-lg-0 mt-1 mt-lg-0" to="/" end>Home</NavLink>
                    <NavLink className="nav-item nav-link text3 font2 mb-1 mb-lg-0" to="/galleryPage">Gallery</NavLink>
                    <NavLink className="nav-item nav-link text3 font2 mb-1 mb-lg-0" to="/chisiamoPage">Chi siamo</NavLink>
                    <button className='btn navbtn mb-1 mb-lg-0'>
                        <a href="https://www.booking.com/hotel/it/copacabana-colors-margherita-di-savoia.it.html?aid=311091&label=copacabana-colors-margherita-di-savoia-Ket%2AnM2r9rdqJk5m3MbsNwS450167591004%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666995%3Akwd-400031164451%3Alp1008080%3Ali%3Adec%3Adm&sid=21b28a810709e5d6da1613a5f4b56075&dest_id=-121072;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1724249448;srpvid=8a3063afcf5201be;type=total;ucfs=1&" target="blank" className="nav-item nav-link text1 font2" >Prenota</a>
                    </button>
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