import React, { useState } from "react";
import data from "./../../dishes.json";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "./Slider.css";
function Slider() {
  const images = [data[9].image, data[1].image, data[2].image, data[4].image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider">
      <div
        className="large-image"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <FiArrowLeft className="arrow left" onClick={prevImage} />
        <FiArrowRight className="arrow right" onClick={nextImage} />
      </div>
      <div className="small-images">
        {images.map((img, index) => (
          <div
            key={index}
            className={`small-image ${
              index === currentImageIndex ? "active" : ""
            }`}
            style={{ backgroundImage: `url(${img})` }}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
