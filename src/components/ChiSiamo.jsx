
import React, { useEffect } from 'react';

// Import Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa anche il CSS di AOS

import './ChiSiamo.css'

export default function ChiSiamo(){

    useEffect(() => {
        setTimeout(() => {
          AOS.init({
            duration: 400,
            once: true,
            offset: 100, // Aggiungi un offset per attivare l'animazione prima
          });
          AOS.refresh(); // Aggiorna AOS dopo l'inizializzazione
        }, 100);
      }, []);

    return(
        <>
        <div className="container-fluid my-5">
            <div className='row imgBand'>
                <div className='col-12 shadeBand'>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <h3 className='z-2 h1 pt-5 text-center fw-bold text2 font1'>CHI SIAMO</h3>
                        <p className='text0 z-2 mt-4 text-center fs-4 lorem font2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem accusantium itaque, maxime sed hic, fuga in laborum odio repudiandae velit illum eius dolore recusandae tempora labore assumenda. Animi, sint?</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}