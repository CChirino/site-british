import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '/static/images/linea-tiempo-cuc/CUC_01.png',
    '/static/images/linea-tiempo-cuc/CUC_02.png',
    '/static/images/linea-tiempo-cuc/CUC_03.png',
    '/static/images/linea-tiempo-cuc/CUC_04.png',
    '/static/images/linea-tiempo-cuc/CUC_05.png',
    '/static/images/linea-tiempo-cuc/CUC_06.png',
    '/static/images/linea-tiempo-cuc/CUC_07.png',
    '/static/images/linea-tiempo-cuc/CUC_08.png',
    '/static/images/linea-tiempo-cuc/CUC_09.png',
    '/static/images/linea-tiempo-cuc/CUC_10-41.png',
    '/static/images/linea-tiempo-cuc/CUC_11-42.png',
    '/static/images/linea-tiempo-cuc/CUC_12-43.png',
    '/static/images/linea-tiempo-cuc/CUC_13-44.png',
    '/static/images/linea-tiempo-cuc/CUC_14-45.png',
    '/static/images/linea-tiempo-cuc/CUC_15-46.png',
    '/static/images/linea-tiempo-cuc/CUC_16-47.png',
    '/static/images/linea-tiempo-cuc/CUC_17-48.png',
    '/static/images/linea-tiempo-cuc/CUC_18-49.png',
    '/static/images/linea-tiempo-cuc/CUC_19-50.png',
    '/static/images/linea-tiempo-cuc/CUC_20-51.png',
    '/static/images/linea-tiempo-cuc/CUC_21-52.png',
    '/static/images/linea-tiempo-cuc/CUC_22-53.png',
    '/static/images/linea-tiempo-cuc/CUC_23-54.png',
    '/static/images/linea-tiempo-cuc/CUC_24-55.png',
    '/static/images/linea-tiempo-cuc/CUC_25-56.png',
    '/static/images/linea-tiempo-cuc/CUC_26-57.png',
    '/static/images/linea-tiempo-cuc/CUC_27-58.png',
    '/static/images/linea-tiempo-cuc/CUC_28-59.png',
    '/static/images/linea-tiempo-cuc/CUC_29-60.png',
    '/static/images/linea-tiempo-cuc/CUC_30-61.png',
    '/static/images/linea-tiempo-cuc/CUC_31-62.png',
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Cambia la imagen cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container w-full flex justify-center items-center">
      <button onClick={prevSlide} className="prev-button p-2 bg-gray-300 hover:bg-gray-400 rounded">Prev</button>
      <div className="slider w-3/4 overflow-hidden relative">
        <div
          className="slider-inner grid grid-cols-6 gap-2 transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100 / 6}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide flex justify-center">
              <img src={image} alt={`Slide ${index}`} className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <button onClick={nextSlide} className="next-button p-2 bg-gray-300 hover:bg-gray-400 rounded">Next</button>
    </div>
  );
};

export default Slider;
