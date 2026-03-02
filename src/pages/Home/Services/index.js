import React, { useState, useEffect } from "react";
import searchIcon from "../../../assets/Images/search-icon.svg";
import fileIcon from "../../../assets/Images/file-icon.svg";
import training from "../../../assets/Images/Trainini-card-icon.svg";
import groupIcon from "../../../assets/Images/group-icon.svg";
import "./Services.css";

const ServicesSection = () => {

  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

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
      desc: "Identify compliance gaps and improvement areas in your management systems",
      class: "service-card1 white-card",
    },
    {
      icon: training,
      title: "Customized Trainings",
      desc: "Tailored training programs designed for your team's specific needs.",
      class: "service-card teal-card",
    },
    {
      icon: groupIcon,
      title: "Transition Of Standards",
      desc: "Seamless migration to updated ISO standards with expert guidance.",
      class: "service-card1 white-card",
    },
   
  ];

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth <= 768) {
        setCardsPerView(1);
      } 
      else if (window.innerWidth <= 1024) {
        setCardsPerView(2);
      } 
      else {
        setCardsPerView(4);
      }

    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  const next = () => {
    if (index < cards.length - cardsPerView) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="services-section">

      <div className="section-header">
        <h2>Our Services</h2>
        <p>
          Comprehensive ISO consulting and training solutions tailored to your business needs
        </p>
      </div>

      <div className="slider-wrapper">

        <button className="service-arrow left" onClick={prev}>‹</button>

        <div className="services-slider">

          <div
            className="services-track"
            style={{
              transform: `translateX(-${index * (100 / cardsPerView)}%)`
            }}
          >

            {cards.map((card, i) => (

              <div
                key={i}
                className="service-item"
                style={{ flex: `0 0 ${100 / cardsPerView}%` }}
              >

                <div className={card.class}>

                  <div className="icon-box">
                    <img src={card.icon} alt={card.title} />
                  </div>

                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

        <button className="service-arrow right" onClick={next}>›</button>

      </div>

    </section>
  );
};

export default ServicesSection;