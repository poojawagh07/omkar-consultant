import { BiCertification } from "react-icons/bi";
import "./Iso-Certification.css"
import iso1 from "../../assets/Images/Iso_certification1.png"
const IsoCertification=()=>{
    return(
        <div>
              <section className="iso-hero-section">
      <div className="iso-hero-container">

        {/* LEFT CONTENT */}
        <div className="iso-hero-content">

          <span className="iso-hero-badge">
            Quality Management System
          </span>

          <h1 className="iso-hero-title">
            ISO 9001:2015
            <span className="iso-hero-highlight"> Certification</span>
          </h1>

          <p className="iso-hero-description">
            Achieve excellence in quality management with expert guidance for
            ISO 9001:2015 certification. Recognized globally across
            manufacturing and service industries.
          </p>

          <div className="iso-hero-buttons">
            <button className="iso-hero-btn-primary">
              Get Started
            </button>

            <button className="iso-hero-btn-outline">
              Learn More
            </button>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="iso-hero-image-wrapper">
          <img
            src={iso1}
            alt="ISO Certification"
            className="iso-hero-image"
          />
        </div>

      </div>
    </section>


    
        </div>
    )
}
export default IsoCertification;
