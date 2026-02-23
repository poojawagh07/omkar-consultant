import "./IsoStandards.css";
import { useState } from "react";
import IsoStandardsImg from "../../assets/Images/iso-image.png";
import msgIcon from "../../assets/Images/msg-icon.svg";
import IsoCards from "./IsoCards/index.js";
import Footer from "../../components/Footer/index.js";

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

      {/* CARDS (UNCHANGED) */}
      <IsoCards />

      {/* CONSULTATION MODAL */}
      {showModal && (
        <div className="consult-overlay">
          <div className="consult-modal-box">

            <div className="consult-header">
              <div>
                <h2>Get Free Consultation</h2>
                <p>Fill in your details and we'll get back to you shortly</p>
              </div>
              <button
                className="consult-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
            </div>

            <div className="consult-body">
              <form>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name <span>*</span></label>
                    <input type="text" placeholder="John Doe" />
                  </div>

                  <div className="form-group">
                    <label>Company Name <span>*</span></label>
                    <input type="text" placeholder="Your Company" />
                  </div>

                  <div className="form-group">
                    <label>Email Address <span>*</span></label>
                    <input type="email" placeholder="john@company.com" />
                  </div>

                  <div className="form-group">
                    <label>Phone Number <span>*</span></label>
                    <input type="tel" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Service / Training <span>*</span></label>
                  <input type="text" />
                </div>

                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea placeholder="Tell us about your requirements..."></textarea>
                </div>

                <div className="consult-footer">
                  <button type="submit" className="submit-btn">
                    Submit Enquiry
                  </button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      )}

      {/* <Footer /> */}
    </>
  );
};

export default IsoStandards;