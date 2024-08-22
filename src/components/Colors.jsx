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
                <h2 className="text-center my-5 fw-bold text1 font1 ">OUR COLORS</h2>

                {/* card  */}
                <div className="col-12 col-lg-5 ">
                    <div className="card border-0 rounded-0 bg0 mt-lg-5 mb-3 mb-lg-0 p-2 p-lg-0">
                        <div className='overflow-hidden'>
                            <img src={riccio} className="card-img-top border-0" alt="..."/>
                        </div>
                        <div className="card-body">
                            <h5 className='text1 font1'>Nome stanza</h5>
                            <p className="card-text font2 text3 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <button type="button" className="btn btn-outline-primary btn-lg bg1 text0 cardbtn font2" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Dettagli
                            </button>
                        </div>
                    </div>
                </div>
                {/* card  */}
                {/* card  */}
                <div className="col-12 col-lg-5">
                    <div className="card border-0 rounded-0 bg0 mt-lg-5 mb-3 mb-lg-0 p-2 p-lg-0">
                        <img src={luminaire} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className='text1 font1'>Nome stanza</h5>
                            <p className="card-text font2 text3 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                {/* card  */}
                {/* card  */}
                <div className="col-12 col-lg-5">
                    <div className="card border-0 rounded-0 bg0 mt-lg-5 mb-3 mb-lg-0 p-2 p-lg-0">
                        <img src={verde} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className='text1 font1'>Nome stanza</h5>
                            <p className="card-text font2 text3 ">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                {/* card  */}
                {/* card  */}
                <div className="col-12 col-lg-5">
                    <div className="card border-0 rounded-0 bg0 mt-lg-5 mb-3 mb-lg-0 p-2 p-lg-0">
                        <img src={riccio} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className='text1 font1'>Nome stanza</h5>
                            <p className="card-text font2 text3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                {/* card  */}
                         
            </div>
        </div>


            {/* Modal */}  
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content rounded-0">
                        <div className="modal-header bg0 border-0">
                            <h1 className="modal-title fs-5 font1 text1 fw-bold" id="staticBackdropLabel">NOME STANZA</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body bg0 border-0 font2 text3">
                            Contenuto della modale
                        </div>
                        <div className="modal-footer bg0 border-0">
                            <button type="button" className="btn closebtn" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn modalbtn">Prenota</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}