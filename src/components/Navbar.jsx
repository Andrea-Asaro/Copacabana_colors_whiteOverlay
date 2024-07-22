export default function Navbar(){

    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg1 px-4 px-lg-5 py-3 py-lg-0">
        <a href="index.html" className="navbar-brand p-0">
            <h1 className="text-primary m-0"><i className="fas fa-star-of-life me-3"></i>Terapia</h1>
            <img src="img/logo.png" alt="Logo"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <i className="bi bi-list-nested fs-1 text-a"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Services</a>
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                        <a href="appointment.html" className="dropdown-item">Appointment</a>
                        <a href="feature.html" className="dropdown-item">Features</a>
                        <a href="blog.html" className="dropdown-item">Our Blog</a>
                        <a href="team.html" className="dropdown-item">Our Team</a>
                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="contact.html" className="nav-item nav-link">Contact Us</a>
            </div>
        </div>
    </nav>
    )
}