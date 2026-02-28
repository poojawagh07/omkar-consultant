import React, { useState } from "react";
import "./Testimonial.css";

const testimonialsData = [
  {
    text: `"Omkar Consultancy helped us achieve ISO 9001:2015 certification smoothly. Their expertise and support throughout the process were exceptional."`,
    name: "John Doe",
    role: "Quality Manager, ABC Corp",
  },
  {
    text: `"Omkar Consultancy helped us achieve ISO 9001:2015 certification smoothly. Their expertise and support throughout the process were exceptional."`,
    name: "John Doe",
    role: "Quality Manager, ABC Corp",
  },
  {
    text: `"Omkar Consultancy helped us achieve ISO 9001:2015 certification smoothly. Their expertise and support throughout the process were exceptional."`,
    name: "John Doe",
    role: "Quality Manager, ABC Corp",
  },
  
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;

  const nextSlide = () => {
    if (currentIndex < testimonialsData.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2>Client Testimonials</h2>
          <p>Hear what our clients say about our services</p>
        </div>

        <div className="carousel-wrapper">
          <button className="arrow left" onClick={prevSlide}>
            ‹
          </button>

          <div className="testimonial-slider">
            <div
              className="testimonial-grid"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {testimonialsData.map((item, index) => (
                <div className="testimonial-card" key={index}>
                  <div className="stars">★★★★★</div>

                  <p className="testimonial-text">{item.text}</p>

                  <div className="testimonial-user">
                    <div className="avatar">{item.name.charAt(0)}</div>

                    <div>
                      <h4>{item.name}</h4>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="arrow right" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
