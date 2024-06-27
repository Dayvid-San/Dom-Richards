'use client';

import Style from './styles.module.scss';
import React, { useState, useEffect } from 'react';


const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/public/logo.png',
        '/images/image2.jpg',
        '/images/image3.jpg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className={Style.carousel}>
            <div className={Style.carouselInner} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div className={Style.carouselItem} key={index}>
                        <img src={src} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <div className={Style.controls}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={currentIndex === index ? Style.active : ''}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
