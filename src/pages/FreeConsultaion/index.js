import "./FreeConsultation.css";
import FreeConsultationImg from "../../assets/Images/iso-image.png";
import msgIcon from "../../assets/Images/msg-icon.svg";
import FreeConsultation1 from "./FreesConsultaon_card/index.js";

const FreeConsultation = () => {
  return (
    <>
      <section className="FreeConsultation-hero">
        <img
          src={FreeConsultationImg}
          alt="FreeConsultation"
          className="hero-bg-FreeConsultation"
        />

        <div className="hero-overlay-FreeConsultation"></div>

        <div className="hero-content-FreeConsultation">
          <h1>Training Programs</h1>
          <p>
            Professional ISO training by certified experts with practical approach.
          </p>
        </div>

        <button className="consult-btn-FreeConsultation">
          <span>Get Consultation</span>
          <img src={msgIcon} alt="arrow" />
        </button>
      </section>
<FreeConsultation1/>
    </>
  );
};

export default FreeConsultation;