import "./IsoStandards.css";
import { useState } from "react";
import IsoStandardsImg from "../../assets/Images/iso-image.png";
import msgIcon from "../../assets/Images/msg-icon.svg";
import IsoCards from "./IsoCards/index.js";
import Footer from "../../components/Footer/index.js";
import ConsultionModal from "../../components/ConsultationModal/index.js"
const IsoStandards = () => {

  const [showModal, setShowModal] = useState(false);


  
  return (
    <>
      <section className="IsoStandards-hero">
        <img
          src={IsoStandardsImg}
          alt="IsoStandards"
          className="hero-bg-IsoStandards"
        />

        <div className="hero-overlay-IsoStandards"></div>

        <div className="hero-content-IsoStandards">
          <h1>Training Programs</h1>
          <p>
            Professional ISO training by certified experts with practical approach.
          </p>
        </div>

        {/* OPEN MODAL BUTTON */}
        <button
          className="consult-btn-IsoStandards"
          onClick={() => setShowModal(true)}
        >
          
          <span>Get Consultation</span>
          <img src={msgIcon} alt="arrow" />
        </button>
      </section>

  <IsoCards/>
   <ConsultionModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />

    </>
  );
};

export default IsoStandards;