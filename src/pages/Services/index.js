import "./Services.css";
import { Link } from "react-router-dom";
import Consultation from "../../components/ConsultationModal/index.js";
import React, { useState } from "react";
import ServiceCard from "./ServicesCard";
import ServicesImg from "../../assets/Images/Services-img.png";
import msgIcon from "../../assets/Images/msg-icon.svg";

const Services = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="services-hero-section">
        <img src={ServicesImg} alt="Services" className="services-hero-bg" />

        <div className="services-hero-overlay"></div>

        <div className="services-hero-content">
          <h1>Our Services</h1>
          <p>
            Comprehensive ISO consulting and training services tailored to your
            needs
          </p>
        </div>

        <button
          className="services-consult-btn"
          onClick={() => setShowModal(true)}
        >
          <span>Get Consultation</span>
          <img src={msgIcon} alt="arrow" />
        </button>
      </section>

      <ServiceCard />

      {showModal && (
        <Consultation
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Services;