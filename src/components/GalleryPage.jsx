import React, { useEffect } from 'react';

// Import Animation on Scroll
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa anche il CSS di AOS

import image1 from "../media/ChisiamoPageImage1.jpg"
import image2 from "../media/ChisiamoPageImage2.jpeg"
import image3 from "../media/ChisiamoPageImage3.jpg"
import image4 from "../media/ChisiamoPageImage4.jpeg"

export default function GalleryPage(){

    useEffect(() => {
        const updateAOS = () => {
            const isMobile = window.innerWidth < 992; // Imposta la larghezza del breakpoint
            const imageElements = document.querySelectorAll('[data-aos]');
            imageElements.forEach((element, index) => {
                const animationType = isMobile
                    ? index % 2 === 0
                        ? 'fade-up'
                        : 'fade-down'
                    : element.getAttribute('data-original-aos');

                // Calcola il delay per i dispositivi mobili
                const delay = isMobile ? index * 350 : element.getAttribute('data-original-delay');
                 
                element.setAttribute('data-aos', animationType);
                element.setAttribute('data-aos-delay', delay);
            });
            AOS.refresh(); // Rinfresca AOS per applicare le nuove animazioni
        };

        AOS.init({
            duration: 400, // puoi personalizzare la durata dell'animazione
            once: true, // l'animazione avviene solo una volta
        });

        // Memorizza l'animazione originale per ripristinarla su desktop
        document.querySelectorAll('[data-aos]').forEach((element) => {
            element.setAttribute('data-original-aos', element.getAttribute('data-aos'));
            element.setAttribute('data-original-delay', element.getAttribute('data-aos-delay') || '0');
        });

        updateAOS();
        window.addEventListener('resize', updateAOS);

        return () => {
            window.removeEventListener('resize', updateAOS);
        };
    }, []);

    return (

    <>

        <div className="container">
            <div className="row pb-5">
                <div className="col-12 py-3">
                    <h2 className="text-center my-5 py-2 fw-bold text1 font1">LA NOSTRA GALLERY</h2>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <div data-aos="fade-down-right">
                        <img
                        src={image1}
                        className="w-100 rounded-0 mb-4"
                        alt="Boat on Calm Water"
                        />
                    </div>
                    <div data-aos="fade-up-right" data-aos-delay="100">
                        <img
                        src={image3}
                        className="w-100 rounded-0 mb-4"
                        alt="Wintry Mountain Landscape"
                        />
                    </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <div data-aos="fade-up" data-aos-delay="200">
                        <img
                        src={image4}
                        className="w-100 rounded-0 mb-4"
                        alt="Mountains in the Clouds"
                        />
                    </div>
                    <div data-aos="fade-down" data-aos-delay="300">
                        <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                        className="w-100 rounded-0 mb-4"
                        alt="Boat on Calm Water"
                        />
                    </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                    <div data-aos="fade-down-left" data-aos-delay="400">
                        <img
                        src={image2}
                        className="w-100 rounded-0 mb-4"
                        alt="Waves at Sea"
                        />
                    </div>
                    <div data-aos="fade-up-left" data-aos-delay="500">
                        <img
                        src={image3}
                        className="w-100 rounded-0 mb-4"
                        alt="Yosemite National Park"
                        />
                    </div>
                </div>

            </div>
        </div>

    </>
    )

}
