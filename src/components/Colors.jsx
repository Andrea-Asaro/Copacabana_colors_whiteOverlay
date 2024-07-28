import Card from './Card';

// import { useNavigate } from 'react-router-dom'; 

import './Colors.css'

import riccio from '../media/riccio.jpg';
import luminaire from '../media/luminaire.jpeg';
import verde from '../media/verde.jpg';


export default function Colors(){

    // const navigate = useNavigate();
    const handleDetailClick = () => {
        navigate('/detail'); // Cambia il percorso in base alla tua configurazione
      };

    // crea array con le 4 stanze: 1- due o tre foto stanza, 2- nome stanza, 3- descrizione stanza, 4- foto copertina stanza

    return(

        <>
        <div className="container mt-5 px-lg-5">
            <div className="row justify-content-around">
                <h2 className="text-center my-5 text3">OUR COLORS</h2>

                {/* card  */}
                <div className="col-12 col-lg-5 ">
                    <div className="card border-0 rounded-0 bg0 mt-lg-5 mb-3 mb-lg-0">
                        <div className='overflow-hidden'>
                            <img src={riccio} className="card-img-top border-0" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className='fw-bold text1'>Nome stanza</h5>
                            <p className="card-text text3 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button onClick={handleDetailClick} className="btn btn-outline-primary btn-lg bg1 text0 cardbtn">Dettagli</button>
                        </div>
                    </div>
                </div>
                {/* card  */}
                {/* card  */}
                <div className="col-12 col-lg-5">
                    <div className="card border-0 rounded-0 bg0 mt-lg-5 mb-3 mb-lg-0">
                        <img src={luminaire} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className='fw-bold text1'>Nome stanza</h5>
                            <p className="card-text text3 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                {/* card  */}
                {/* card  */}
                <div className="col-12 col-lg-5">
                    <div className="card border-0 rounded-0 bg0 mt-lg-5 mb-3 mb-lg-0">
                        <img src={verde} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className='fw-bold text1'>Nome stanza</h5>
                            <p className="card-text text3 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                {/* card  */}
                {/* card  */}
                <div className="col-12 col-lg-5">
                    <div className="card border-0 rounded-0 bg0 mt-lg-5 mb-3 mb-lg-0">
                        <img src={riccio} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className='fw-bold text1'>Nome stanza</h5>
                            <p className="card-text text3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                {/* card  */}
                         
            </div>
        </div>
        </>
    )
}