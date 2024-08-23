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
                        <button type="button" className="btn modalbtn">
                            <a target='blank' href="https://www.booking.com/hotel/it/copacabana-colors-margherita-di-savoia.it.html?aid=311091&label=copacabana-colors-margherita-di-savoia-Ket%2AnM2r9rdqJk5m3MbsNwS450167591004%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666995%3Akwd-400031164451%3Alp1008080%3Ali%3Adec%3Adm&sid=21b28a810709e5d6da1613a5f4b56075&dest_id=-121072;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1724249448;srpvid=8a3063afcf5201be;type=total;ucfs=1&">Prenota</a>
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
        {/* Modal */}  


    </>
    )
}