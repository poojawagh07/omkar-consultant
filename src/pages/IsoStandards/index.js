import "./IsoStandards.css";
import IsoStandardsImg from "../../assets/Images/iso-image.png";
import msgIcon from "../../assets/Images/msg-icon.svg";
import IsoCards from "./IsoCards/index.js";
import Footer from "../../components/Footer/index.js";
const IsoStandards = () => {
  return (
    <>
      <section className="IsoStandards-hero">
        <img src={IsoStandardsImg} alt="IsoStandards" className="hero-bg-IsoStandards" />

        <div className="hero-overlay-IsoStandards"></div>

        <div className="hero-content-IsoStandards">
          <h1>Training Programs</h1>
          <p>
          Professional ISO training by certified experts with practical approach.
          </p>
        </div>

        <button className="consult-btn-IsoStandards">
          <span>Get Consultation</span>
          <img src={msgIcon} alt="arrow" />
        </button>
      </section>
      <IsoCards/>

    </>
  );
};

export default IsoStandards;
