
import React, { useEffect } from 'react';


// Import Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa anche il CSS di AOS


import "./ChisiamoPage.css"
import image1 from "../media/ChisiamoPageImage1.jpg"
import image2 from "../media/ChisiamoPageImage2.jpeg"
import image3 from "../media/ChisiamoPageImage3.jpg"
import image4 from "../media/ChisiamoPageImage4.jpeg"

export default function ChisiamoPage(){


    useEffect(() => {
        AOS.init({
          duration: 400, // puoi personalizzare la durata dell'animazione
          once: true, // l'animazione avviene solo una volta
          // puoi aggiungere altre opzioni di configurazione qui
        });
      }, []);

    return (

    <>
    
        {/* fascia sfondo parallasse  */}
        <div className="parallaxContainer mb-5">
            <div className="parallaxContent">
                <h2 className="h1 font1 fw-bold">COPACABANA COLORS</h2>
            </div>
        </div>
        {/* fascia sfondo parallasse  */}

        <h2 className="text-center my-5 py-3 fw-bold text1 font1 ">CHI SIAMO?</h2>
        
        <div className="container">
            <div className="row">

                <div data-aos="fade-right" data-aos-duration="650" className="col-12 col-lg-6 lh-lg fs-5 mb-5 order-2 order-lg-1">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem accusantium itaque, maxime sed hic, fuga in laborum odio repudiandae velit illum eius dolore recusandae tempora labore assumenda. Animi, sint?Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Animi, sint?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem accusantium itaque, maxime sed hic, fuga in laborum odio repudiandae velit illum eius dolore recusandae tempora labore assumenda. Animi, sint?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem accusantium itaque, maxime sed hic, fuga in laborum odio repudiandae velit illum eius dolore recusandae tempora labore assumenda. Aliquam voluptatem accusantium itaque, maxime sed hic, fuga in laborum odio repudiandae velit illum eius dolore recusandae tempora labore assumenda. Animi, sint?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem accusantium itaque, maxime sed hic, fuga in laborum odio repudiandae velit illum eius dolore recusandae tempora labore assumenda. Animi, sint?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, sint?</p>
                </div>

                <div data-aos="fade-left" data-aos-duration="650" className="col-12 col-lg-6 mb-5 order-1 order-lg-2">
                    <img src={image1} className="imageWidth ps-lg-4" alt="" />
                </div>



                <div data-aos="fade-up" data-aos-delay="100" className="col-12 col-lg-4 mb-5 order-3">
                    <img src={image2} className="imageWidth" id="longimg" alt="" />
                </div>

                <div data-aos="fade-up" data-aos-delay="200" className="col-12 col-lg-4 mb-5 order-4">
                    <img src={image3} className="imageWidth" alt="" />
                </div>

                <div data-aos="fade-up" data-aos-delay="300" className="col-12 col-lg-4 mb-5 order-5">
                    <img src={image4} className="imageWidth" alt="" />
                </div>

            </div>
        </div>

    

    
    
    
    
    
    </>

    )

}