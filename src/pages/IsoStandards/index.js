import IsoImg from "../../assets/Images/iso-image.png";
import msgIcon from "../../assets/Images/msg-icon.svg";
import "./IsoStandards.css";
// import heroImg from "../../assets/Images/image.png";
// import msgIcon from "../../assets/Images/msg-icon.svg";

const IsoStandards = () => {
  return (
    <section className="training-hero">
      <img src={IsoImg} alt="Training" className="hero-image" />

      <div className="hero-content">
        <h1>Training Programs</h1>

        <p>
          Professional ISO training by certified experts with practical
          approach
        </p>

        <button className="hero-btn">
          <span>Get Consultation</span>
          <img src={msgIcon} alt="icon" />
        </button>
      </div>
    </section>
  );
};

export default IsoStandards;
