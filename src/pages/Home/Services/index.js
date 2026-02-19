import React, { useRef, useEffect } from "react";
import searchIcon from "../../../assets/Images/search-icon.svg";
import fileIcon from "../../../assets/Images/file-icon.svg";
import training from "../../../assets/Images/Trainini-card-icon.svg";
import groupIcon from "../../../assets/Images/group-icon.svg";
import "./Services.css";

const ServicesSection = () => {
  const sliderRef = useRef(null);

  const cards = [
    {
      icon: searchIcon,
      title: "Gap Audit",
      desc: "Identify compliance gaps and improvement areas in your management systems",
      class: "service-card teal-card",
    },
    {
      icon: fileIcon,
      title: "Internal Audit",
      desc: "Identify compliance gaps and improvement areas",
      class: "service-card1 white-card",
    },
    {
      icon: training,
      title: "Customized Trainings",
      desc: "Tailored training programs designed for your team",
      class: "service-card teal-card",
    },
    {
      icon: groupIcon,
      title: "Transition Of Standards",
      desc: "Seamless migration to updated ISO standards",
      class: "service-card1 white-card",
    },
  ];

  // Triple copy for infinite illusion
  const infiniteCards = [...cards, ...cards, ...cards];

  // Slide function
  const slide = (direction) => {
    const slider = sliderRef.current;
    const card = slider.children[0];
    const gap = 15;
    const cardWidth = card.offsetWidth + gap;

    slider.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  // Infinite loop logic
  useEffect(() => {
    const slider = sliderRef.current;

    const card = slider.children[0];
    const gap = 15;
    const cardWidth = card.offsetWidth + gap;
    const singleSetWidth = cardWidth * cards.length;

    // Start from middle copy
    slider.scrollLeft = singleSetWidth;

    const handleScroll = () => {
      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = singleSetWidth;
      }

      if (slider.scrollLeft >= singleSetWidth * 2) {
        slider.scrollLeft = singleSetWidth;
      }
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="services-section">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>
          Comprehensive ISO consulting and training solutions tailored to your
          business needs
        </p>
      </div>

      <div className="container">

        <button className="service-arrow left" onClick={() => slide("left")}>
          ‹
        </button>

        <button className="service-arrow right" onClick={() => slide("right")}>
          ›
        </button>

        <div className="services-slider" ref={sliderRef}>
          {infiniteCards.map((card, i) => (
            <div key={i} className={card.class}>
              <div className="icon-box">
                <img src={card.icon} alt="" />
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
