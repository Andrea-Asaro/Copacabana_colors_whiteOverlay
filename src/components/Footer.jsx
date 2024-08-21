import './Footer.css'
import logo from "../media/logo.png"

export default function Footer(){

    return(

        <>
        {/* <div className="container-fluid">
            <div className="row justify-content-evenly">
                <div className="col-12 text-center">
                    <img className='mb-3' src={logo} alt="" />
                </div>
                <div className="col-12 col-lg-3 ps-lg-5 ms-5 bg-info">
                    <h5 className='h4  mb-3'>Copacabana Colors</h5>
                    <p className='h5 '>Colors</p>
                    <p className='h5 '>Gallery</p>
                    <p className='h5 '>pippo</p>
                </div>
                <div className="col-12 col-lg-3 ps-lg-5 ms-5 bg-info">
                    <h5 className='h4 '>Hotel Design</h5>
                </div>
                <div className="col-12 col-lg-3 ps-lg-5 ms-5 bg-info">
                    <h5 className='h4 '>Copacabana Suite</h5>
                </div>
            </div>
        </div> */}
        
        
        <div className="container-fluid px-5 bg1" id='footer'>
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 font2">
                <div className="col mb-3">
                    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                    <img src={logo} alt="" />
                    </a>
                    <p className="text3 ps-3">© 2024</p>
                </div>

                <div className="col mb-3">

                </div>

                <div className="col mb-3">
                    <h5 className='h4 mb-4 text3'>Copacabana Colors</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text3 fs-6 ">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text3 fs-6 ">Colors</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text3 fs-6 ">Gallery</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5 className='h4 mb-4 text3'>Hotel Design</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text3 fs-6 ">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text3 fs-6 ">Colors</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text3 fs-6 ">Gallery</a></li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5 className='h4 mb-4 text3'>Copacabana Suite</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text3 fs-6 ">Home</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text3 fs-6 ">Colors</a></li>
                        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text3 fs-6 ">Gallery</a></li>
                    </ul>
                </div>
            </footer>
        </div>
        
        
        </>
    )

}
