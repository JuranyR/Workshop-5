// Componente que crea una instancia de Lottie
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from '../../lotties/71357-scan-payment-confirmation.json';

function LottieAnimation({ play }) {
    const containerRef = useRef(null);
    const animationRef = useRef(null);

    useEffect(() => {
        if (!animationRef.current) {
        animationRef.current = lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: false,
            autoplay: false, // autoplay debe ser false
            animationData: animationData
        });
        }

        if (play) {
        animationRef.current.play();
        } else {
        animationRef.current.pause();
        }

        return () => {
        if (animationRef.current) {
            animationRef.current.destroy();
            animationRef.current = null;
        }
        };
    }, [play]);

    return <div ref={containerRef}></div>;
}

export default LottieAnimation;