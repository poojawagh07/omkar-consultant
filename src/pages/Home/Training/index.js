import React from "react";
import "./Training.css";
import { Link } from "react-router-dom";
import Services from "../Services/index.js";
import ContactModal from "../../../components/ConsultationModal/index.js";
import { useState } from "react";

const TrainingSection = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="training-section">
      <div className="container">
        <div className="section-header">
          <h2>Training Programs</h2>
          <p>
            Professional training by certified experts with practical approach
          </p>
        </div>

        <div className="training-grid">
          <div className="training-card">
            <div className="card-header">
              <div className="top-tags">
                <span className="tag-pill">Both</span>
                <span className="tag-pill white">2 Days</span>
              </div>
              <h3>ISO 9001:2015 Internal Auditor Training</h3>
              <p className="iso-sub">ISO 9001:2015</p>
            </div>

            <div className="card-body">
              <p className="price-label">Fees</p>
              <h4 className="price">₹5,000 per participant</h4>
              <p className="description">
                Comprehensive training on conducting internal audits for ISO
                9001:2015 Quality Management System.
              </p>
              <button
                onClick={() => {
                  console.log("Clicked");
                  setShowModal(true);
                }}
                className="btn-enquire"
              >
                Enquiry Now
              </button>
            </div>
          </div>

          <div className="training-card">
            <div className="card-header">
              <div className="top-tags">
                <span className="tag-pill">Virtual</span>
                <span className="tag-pill white">1 Day</span>
              </div>
              <h3>ISO 14001:2015 Awareness Training</h3>
              <p className="iso-sub">ISO 14001:2015</p>
            </div>

            <div className="card-body">
              <p className="price-label">Fees</p>
              <h4 className="price">₹3,000 per participant</h4>
              <p className="description">
                Basic awareness training on Environmental Management System
                requirements and implementation.
              </p>
              <button
                onClick={() => {
                  console.log("Clicked");
                  setShowModal(true);
                }}
                className="btn-enquire"
              >
                Enquiry Now
              </button>
            </div>
          </div>

          <div className="training-card">
            <div className="card-header">
              <div className="top-tags">
                <span className="tag-pill">Classroom</span>
                <span className="tag-pill white">5 Days</span>
              </div>
              <h3>ISO 45001:2018 Lead Auditor Training</h3>
              <p className="iso-sub">ISO 45001:2018</p>
            </div>

            <div className="card-body">
              <p className="price-label">Fees</p>
              <h4 className="price">₹18,000 per participant</h4>
              <p className="description">
                Internationally recognized lead auditor training for
                Occupational Health & Safety Management System.
              </p>
              <button
                onClick={() => {
                  console.log("Clicked");
                  setShowModal(true);
                }}
                className="btn-enquire"
              >
                Enquiry Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="view-all-container">
        <Link to="/Services" className="btn-view-all">
          View All Training Programs
        </Link>
      </div>

      <ContactModal show={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
};

export default TrainingSection;
