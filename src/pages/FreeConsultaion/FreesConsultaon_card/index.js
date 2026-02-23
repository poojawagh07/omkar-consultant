import React, { useState, useEffect } from "react";
import "./FreeConsultaon_card.css";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/index.js";
import { useNavigate } from "react-router-dom";

const CarsData = [
  {
    mode: "Both",
    duration: "2 days",
    title: "ISO 9001:2015 Internal Auditor Training",
    iso: "ISO 9001:2015",
    price: "₹5,000 per participant",
    fees: "Fees per participant",
    description:
      "Comprehensive training on conducting internal audits for ISO 9001:2015 Quality Management System.",
  },
  {
    mode: "Virtual",
    duration: "1 Day ",
    title: "ISO14001:2015 Awareness Training",
    iso: "ISO 14001:2015",
    price: "₹3,000 per participant",
    fees: "Fees per participant",
    description: "Basic awareness training on Environmental Management system.",
  },
  {
    mode: "Classroom",
    duration: "1 Day ",
    title: "ISO 45001:2018 Lead Auditor Training",
    iso: "ISO 45001:2018",
    price: "₹2,000 per participant",
    fees: "Fees per participant",
    description:
      "Internationally recognized lead auditor training for Occupational Health & Safety Management System.",
  },
  {
    mode: "Both",
    duration: "3 Day ",
    title: "ISO 22000:2018 International Auditor Training",
    iso: "ISO 22000:2018",
    price: "₹8,000 per participant",
    fees: "Fees per participant",
    description:
      "Training on conducting internationa audits for food Safty Management System inc;luding HACCP.",
  },
  {
    mode: "",
    duration: "",
    title: "",
    iso: "",
    price: "",
    fees: "Fees per participant",
    description: "",
  },
  {
    mode: "Classroom",
    duration: "2 Day ",
    title: "ISO 13485:2016 Awareness Training",
    iso: "ISO 13485:2016",
    price: "₹6,000 per participant",
    fees: "Fees per participant",
    description:
      "Awareness training on Medical Serviced Quality Management System Requirements.",
  },
  {
    mode: "Classroom",
    duration: "5 Day ",
    title: "IATF16949 Core Tools Training",
    iso: "IATF 16949:2016",
    price: "15,000 per participant",
    fees: "Fees per participant",
    description:
      "Comprehensive training on APQP, PPAP.FMEA, MSA, and SPC-the five core tools for automotive industry.",
  },
];

const FressConsultaonCard = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); // open when page loads
  }, []);

  return (
    <>
      {/* ================= MODAL ================= */}
    {showModal && (
  <div className="fc-overlay">
    <div className="fc-modal">

      {/* HEADER */}
      <div className="fc-header">
        <div>
          <h2>Get Free Consultation</h2>
          <p>Fill in your details and we'll get back to you shortly</p>
        </div>
        <button className="fc-close" onClick={() => setShowModal(false)}>
          ✕
        </button>
      </div>

      {/* FLEX FORM INSIDE MODAL */}
      <form
        className="fc-body"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form Submitted Successfully ✅");
          setShowModal(false);
        }}
      >
        <div className="fc-flex">

          <div className="fc-field">
            <label>Full Name <span className="required">*</span></label>
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="fc-field">
            <label>Company Name <span className="required">*</span></label>
            <input type="text" placeholder="Company Name" required />
          </div>

          <div className="fc-field">
            <label>Email Address <span className="required">*</span></label>
            <input type="email" placeholder="Email Address" required />
          </div>

          <div className="fc-field">
            <label>Phone Number <span className="required">*</span></label>
            <input type="tel" placeholder="Phone Number" required />
          </div>

          <div className="fc-field full">
            <label>Message <span className="required">*</span></label>
            <textarea placeholder="Tell us about your requirements..." required />
          </div>

        </div>

        <div className="fc-actions">
          <button type="submit" className="fc-submit">
            Submit Enquiry
          </button>
        </div>

      </form>
    </div>
  </div>
)}
      {/* ================= END MODAL ================= */}

      <section className="FressConsultaon_card-section">
        <div className="FressConsultaon_card-container">
          <div className="FressConsultaon_card-grid">
            {CarsData.map((card, index) => (
              <div className="FressConsultaon_card" key={index}>
                <div className="FressConsultaon_card-header">
                  <div className="FressConsultaon_card-top-tags">
                    <span className="FressConsultaon_card-tag-pill">
                      {card.mode}
                    </span>
                    <span className="FressConsultaon_card-tag-pill white">
                      {card.duration}
                    </span>
                  </div>

                  <h3>{card.title}</h3>
                  <p className="FressConsultaon_card-iso-sub">{card.iso}</p>
                </div>

                <div className="FressConsultaon_card-body">
                  <p className="FressConsultaon_card-price-label">
                    {card.fees}
                  </p>
                  <h4 className="FressConsultaon_card-price">{card.price}</h4>
                  <p className="FressConsultaon_card-description">
                    {card.description}
                  </p>

                  <div className="Buttons">
                    <button
                      className="FressConsultaon_card-btn"
                      onClick={() => setShowModal(true)}
                    >
                      Enquire Now
                    </button>

                    <button
                      className="FressConsultaon_card-btn1"
                      onClick={() => setShowModal(true)}
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default FressConsultaonCard;