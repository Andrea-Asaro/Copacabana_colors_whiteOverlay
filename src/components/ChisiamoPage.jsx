import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import "./ChisiamoPage.css";
import image1 from "../media/ChisiamoPageImage1.jpg";
import image2 from "../media/ChisiamoPageImage2.jpeg";
import image3 from "../media/ChisiamoPageImage3.jpg";
import image4 from "../media/ChisiamoPageImage4.jpeg";

export default function ChisiamoPage() {

    // Animazione per il div dei paragrafi
    const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const textSlideIn = useSpring({
        opacity: textInView ? 1 : 0,
        transform: textInView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 500 },
    });

    // Animazione per l'immagine principale (image1)
    const [img1Ref, img1InView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const img1Zoom = useSpring({
        transform: img1InView ? 'scale(1)' : 'scale(0.8)',
        opacity: img1InView ? 1 : 0,
        config: { duration: 500 },
    });

    // Animazioni per le altre immagini (slide up)
    const [img2Ref, img2InView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const slideUp2 = useSpring({
        opacity: img2InView ? 1 : 0,
        transform: img2InView ? 'translateY(0px)' : 'translateY(35px)',
        config: { duration: 500 },
    });

    const [img3Ref, img3InView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const slideUp3 = useSpring({
        opacity: img3InView ? 1 : 0,
        transform: img3InView ? 'translateY(0px)' : 'translateY(35px)',
        config: { duration: 650 },
    });

    const [img4Ref, img4InView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const slideUp4 = useSpring({
        opacity: img4InView ? 1 : 0,
        transform: img4InView ? 'translateY(0px)' : 'translateY(35px)',
        config: { duration: 800 },
    });

    return (
        <>
            {/* fascia sfondo parallasse  */}
            <div className="parallaxContainer mb-5">
                <div className="parallaxContent">
                    <h2 className="h1 font1 fw-bold">COPACABANA COLORS</h2>
                </div>
            </div>
            {/* fascia sfondo parallasse  */}

            <h2 className="text-center my-5 py-3 fw-bold text1 font1">CHI SIAMO?</h2>

            <div className="container">
                <div className="row">

                    <animated.div
                        className="col-12 col-lg-6 lh-lg fs-5 mb-5 order-2 order-lg-1"
                        ref={textRef}
                        style={textSlideIn}
                    >
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem accusantium itaque, maxime sed hic, fuga in laborum odio repudiandae velit illum eius dolore recusandae tempora labore assumenda. Animi, sint?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem accusantium itaque, maxime sed hic, fuga in laborum odio repudiandae velit illum eius dolore recusandae tempora labore assumenda. Aliquam voluptatem accusantium itaque, maxime sed hic, fuga in laborum odio repudiandae velit illum eius dolore recusandae tempora labore assumenda. Animi, sint?</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem accusantium itaque, maxime sed hic, fuga in laborum odio repudiandae velit illum eius dolore recusandae tempora labore assumenda. Animi, sint?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, sint?</p>
                    </animated.div>

                    <animated.div
                        className="col-12 col-lg-6 mb-5 order-1 order-lg-2"
                        ref={img1Ref}
                        style={img1Zoom}
                    >
                        <img src={image1} className="imageWidth ps-lg-4" alt="" />
                    </animated.div>

                    <animated.div
                        className="col-12 col-lg-4 mb-5 order-3"
                        ref={img2Ref}
                        style={slideUp2}
                    >
                        <img src={image2} className="imageWidth" id="longimg" alt="" />
                    </animated.div>

                    <animated.div
                        className="col-12 col-lg-4 mb-5 order-4"
                        ref={img3Ref}
                        style={slideUp3}
                    >
                        <img src={image3} className="imageWidth" alt="" />
                    </animated.div>

                    <animated.div
                        className="col-12 col-lg-4 mb-5 order-5"
                        ref={img4Ref}
                        style={slideUp4}
                    >
                        <img src={image4} className="imageWidth" alt="" />
                    </animated.div>
                </div>
            </div>
        </>
    );
}
