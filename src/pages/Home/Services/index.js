import React, { useState } from "react";
import searchIcon from "../../../assets/Images/search-icon.svg";
import fileIcon from "../../../assets/Images/file-icon.svg";
import training from "../../../assets/Images/Trainini-card-icon.svg";
import groupIcon from "../../../assets/Images/group-icon.svg";
import "./Services.css";

const ServicesSection = () => {
  const [index, setIndex] = useState(0);

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

  const next = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  return (
    <section className="services-section">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>
          Comprehensive ISO consulting and training solutions tailored to your
          business needs
        </p>
      </div>

      <div className="container" style={{ position: "relative", overflow: "hidden" }}>
        
        <button className="service-arrow left" onClick={prev}>‹</button>
        <button className="service-arrow right" onClick={next}>›</button>

        {/* TRACK */}
        <div
          className="services-grid"
          
        >
          {[ ...cards].map((card, i) => (
            <div key={i} className={card.class}>
              <div className="icon-box">
                <img src={card.icon} alt={card.title} />
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