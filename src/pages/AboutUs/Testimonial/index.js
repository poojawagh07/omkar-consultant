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
  const [testimonials, setTestimonials] = useState(testimonialsData);

  const nextSlide = () => {
    const updated = [...testimonials];
    const first = updated.shift();
    updated.push(first);
    setTestimonials(updated);
  };

  const prevSlide = () => {
    const updated = [...testimonials];
    const last = updated.pop();
    updated.unshift(last);
    setTestimonials(updated);
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

          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <div className="testimonial-card" key={index}>
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">{item.text}</p>

                <div className="testimonial-user">
                  <div className="avatar">J</div>
                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="arrow right" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
