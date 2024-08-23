

import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import './Colors.css'

import riccio from '../media/riccio.jpg';
import luminaire from '../media/luminaire.jpeg';
import verde from '../media/verde.jpg';


export default function Colors() {
    
    // Stato per la stanza selezionata
    const [selectedRoom, setSelectedRoom] = useState(null);
  
    // Array di oggetti che rappresentano le informazioni delle card
    const rooms = [
      { name: 'Stanza 1', description: 'Descrizione per stanza 1', image: riccio, details: 'Dettagli specifici per Stanza 1', gallery: [riccio, luminaire, verde] },
      { name: 'Stanza 2', description: 'Descrizione per stanza 2', image: luminaire, details: 'Dettagli specifici per Stanza 2', gallery: [luminaire, verde, riccio] },
      { name: 'Stanza 3', description: 'Descrizione per stanza 3', image: verde, details: 'Dettagli specifici per Stanza 3', gallery: [verde, riccio, luminaire] },
      { name: 'Stanza 4', description: 'Descrizione per stanza 4', image: riccio, details: 'Dettagli specifici per Stanza 4', gallery: [riccio, luminaire, verde] },
    ];
  
    // Funzione per aprire la modale con i dettagli della stanza selezionata
    const handleDetailClick = (room) => {
      setSelectedRoom(room); // Imposta la stanza selezionata
    };
  
    return (
      <>
        <div className="container mt-5 px-lg-5">
          <div className="row justify-content-around">
            <h2 className="text-center my-5 fw-bold text1 font1">OUR COLORS</h2>
  
            {/* Ciclo per generare le card dinamicamente */}
            {rooms.map((room, index) => (
              <div className="col-12 col-lg-5" key={index}>
                <div className="card border-0 rounded-0 bg0 mt-lg-5 mb-3 mb-lg-0 pb-3 pb-lg-0 p-2 p-lg-0">
                  <div className='overflow-hidden'>
                    <img src={room.image} className="card-img-top border-0" alt={room.name}/>
                  </div>
                  <div className="card-body">
                  <span 
                    className='text1 font1 fw-bold fs-4'
                    onClick={() => handleDetailClick(room)} // Aggiungi l'evento onClick
                    data-bs-toggle="modal" 
                    data-bs-target="#staticBackdrop"
                    style={{ cursor: 'pointer' }} // Aggiungi il puntatore per indicare che è cliccabile
                  >
                    {room.name}
                  </span>
                    <p className="card-text font2 text3 mb-2">{room.description}</p>
                    <button 
                      type="button" 
                      className="btn btn-outline-primary btn-lg bg1 text0 cardbtn font2" 
                      data-bs-toggle="modal" 
                      data-bs-target="#staticBackdrop"
                      onClick={() => handleDetailClick(room)} // Chiama la funzione con i dettagli della stanza
                    >
                      Dettagli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Modal */}
        {selectedRoom && (
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content rounded-0">
  
                <div className="modal-header bg0 border-0">
                  <h2 className="modal-title fs-4 ms-3 font1 text1 fw-bold " id="staticBackdropLabel">{selectedRoom.name}</h2>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
  
                <div className="modal-body bg0 border-0 font2 text3">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 p-3 swiperCol">
                        <Swiper
                          slidesPerView={'auto'}
                          spaceBetween={30}
                          pagination={{
                            clickable: true,
                          }}
                          grabCursor={true}
                          modules={[Pagination]}
                          className="mySwiper"
                        >
                          {selectedRoom.gallery.map((image, index) => (
                            <SwiperSlide key={index}><img src={image} alt={`${selectedRoom.name} ${index + 1}`} /></SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      <div className="col-12 mt-lg-3">
                        <p>{selectedRoom.details}</p>
                        <ul id='detailsBulletList'>
                          <li>Bullet point n.1</li>
                          <li>Bullet point n.2</li>
                          <li>Bullet point n.3</li>
                          <li>Bullet point n.4</li>
                        </ul>
                      </div>
                    </div>
                  </div>
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
        )}
        {/* Modal */}
      </>
    );
  }