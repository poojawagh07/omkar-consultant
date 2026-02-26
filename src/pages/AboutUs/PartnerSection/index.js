import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PartnerSection.css";
import Enquiry from "../../../components/ConsultationModal";

export default function PartnerSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="partner-section">
        <div className="partner-container">
          <h2 className="partner-title">Partner With Us Today</h2>

          <p className="partner-subtitle">
            Let's work together to achieve your ISO certification goals and drive
            organizational excellence
          </p>

          <div className="partner-actions">

            <button
              className="btn-primary"
              onClick={() => setShowModal(true)}
            >
              Get Free Consultation
            </button>

            <Link to="/ContactUs" className="btn-outline">
              Contact Us
            </Link>

          </div>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <Enquiry
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}