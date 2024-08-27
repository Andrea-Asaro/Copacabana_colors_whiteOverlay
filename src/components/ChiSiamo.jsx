import './ChiSiamo.css';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function ChiSiamo() {
    // Utilizza il hook useInView per rilevare quando l'elemento entra nel viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // L'animazione si attiva solo una volta
        threshold: 0.2, // Scatta quando il 20% dell'elemento è visibile
    });

    // Crea l'animazione con useSpring
    const fadeUpStyle = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(50px)',
        config: { mass: 1, tension: 180, friction: 12 }, // Personalizza la velocità e la tensione dell'animazione
    });

    return (
        <div className="container-fluid my-5">
            <div className="row imgBand" ref={ref}>
                <div className="col-12 shadeBand">
                    {/* Applica l'animazione ai componenti */}
                    <animated.h3 style={fadeUpStyle} className="z-2 h1 pt-5 text-center fw-bold text2 font1">
                        CHI SIAMO
                    </animated.h3>
                    <animated.p style={fadeUpStyle} className="text0 z-2 mt-4 text-center fs-4 lorem font2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam voluptatem accusantium itaque, maxime sed hic, fuga in laborum odio repudiandae velit illum eius dolore recusandae tempora labore assumenda. Animi, sint?
                    </animated.p>
                </div>
            </div>
        </div>
    );
}
