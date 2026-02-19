import React from "react";
import { Link } from "react-router-dom";
import "./PartnerSection.css";

export default function PartnerSection() {
  return (
    <section className="partner-section">
      <div className="partner-container">
        <h2 className="partner-title">Partner With Us Today</h2>

        <p className="partner-subtitle">
          Let's work together to achieve your ISO certification goals and drive
          organizational excellence
        </p>

        <div className="partner-actions">
          <Link to="#" className="btn-primary">
            Get Free Consultation
          </Link>

          <Link to="#" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
