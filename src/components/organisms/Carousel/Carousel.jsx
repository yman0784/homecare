import React, { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = ({ images, thumbnails }) => {
  const nextIcon = "/グループ 1533.png";
  const prevIcon = "/グループ 1512.png";

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToSpecificSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, goToNextSlide]);

  return (
    <div className="carousel">
      <div className="carousel-container">
        <button onClick={goToPrevSlide} className="carousel-button prev">
          <img
            src={prevIcon}
            alt="前へ"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </button>
        <div className="carousel-slide">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button onClick={goToNextSlide} className="carousel-button next">
          <img
            src={nextIcon}
            alt="次へ"
            style={{
              width: "40px",
              height: "40px",
            }}
          />
        </button>
        <div className="carousel-number">
          {currentIndex + 1}/{images.length}
        </div>
      </div>
      <div className="thumbnail-box">
        <div className="carousel-thumbnails">
          {thumbnails.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => goToSpecificSlide(index)}
              className={`carousel-thumbnail ${
                index === currentIndex ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
