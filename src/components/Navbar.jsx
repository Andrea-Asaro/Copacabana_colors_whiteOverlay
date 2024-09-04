import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import logo from '../media/logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        if (window.innerWidth < 992) {
            setIsOpen(false); // Chiudi la navbar su mobile
        }
    };

    const handleModalClick = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar d-flex justify-content-between navbar-expand-lg navbar-light bg1 px-4 px-lg-5 py-3 py-lg-0">
            <NavLink to="/" className="navbar-brand p-0 mb-lg-2 ms-lg-5 ps-lg-5">
                <img src={logo} alt="Logo" className='ps-lg-2' />
            </NavLink>
            <button 
                onClick={handleModalClick} 
                className={`navbar-toggler border-0 ${isOpen ? "navbar-togglerOpen" : ""}`} 
                type="button" 
                aria-controls="navbarCollapse"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
            >
                <i className="bi bi-list-nested fs-1 text-a"></i>
            </button>
            {isOpen && (
                <div className={`modal-overlay ${isOpen ? "show" : ""}`}>
                    <div className="navModal-content">
                        <button 
                            type="button" 
                            className="btn-close" 
                            aria-label="Close" 
                            onClick={handleCloseClick}
                        ></button>
                        <div className="navbar-nav">
                            <NavLink 
                                className="nav-item nav-link text3 font2 fs-4" 
                                to="/" 
                                end 
                                onClick={() => { handleLinkClick(); handleModalClick(); }}
                            >
                                Home
                            </NavLink>
                            <NavLink 
                                className="nav-item nav-link text3 font2 fs-4" 
                                to="/galleryPage" 
                                onClick={() => { handleLinkClick(); handleModalClick(); }}
                            >
                                Gallery
                            </NavLink>
                            <NavLink 
                                className="nav-item nav-link text3 font2 fs-4" 
                                to="/chisiamoPage" 
                                onClick={() => { handleLinkClick(); handleModalClick(); }}
                            >
                                Chi siamo
                            </NavLink>
                            <button className='btn navbtn'>
                                <a 
                                    href="https://www.booking.com/hotel/it/copacabana-colors-margherita-di-savoia.it.html?aid=311091&label=copacabana-colors-margherita-di-savoia-Ket%2AnM2r9rdqJk5m3MbsNwS450167591004%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666995%3Akwd-400031164451%3Alp1008080%3Ali%3Adec%3Adm&sid=21b28a810709e5d6da1613a5f4b56075&dest_id=-121072;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1724249448;srpvid=8a3063afcf5201be;type=total;ucfs=1&" 
                                    target="blank" 
                                    className="nav-item nav-link text1 font2 fs-4"
                                >
                                    Prenota
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}