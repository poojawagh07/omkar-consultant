import React from "react";
import "./IsoCards.css";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/index.js";

const CarsData = [
  {
    mode: "Both",
    duration: "4 Hr",
    title: "ISO 9001:2015 Internal Auditor Training",
    iso: "ISO 9001:2015",
    price: "₹2,000 per participant",
    fees: "Fees per participant",
    description:
      "Comprehensive training on conducting internal audits for ISO 9001:2015 Quality Management System.",
  },
  {
    mode: "Virtual",
    duration: "4 Hr",
    title: "ISO 14001:2015 Awareness Training",
    iso: "ISO 14001:2015",
    price: "₹2,000 per participant",
    fees: "Fees per participant",
    description:
      "Basic awareness training on Environmental Management System requirements and implementation.",
  },
  {
    mode: "Classroom",
    duration: "4 Hr",
    title: "ISO 45001:2018 Lead Auditor Training",
    iso: "ISO 45001:2018",
    price: "₹2,000 per participant",
    fees: "Fees per participant",
    description:
      "Internationally recognized lead auditor training for Occupational Health & Safety Management System.",
  },
  {
    mode: "Both",
    duration: "3 Days",
    title: "Intergrated awrness Training on quality",
    iso: "ISO 22000:2018",
    price: "₹15,000 per participant",
    fees: "Fees per participant",
    description: "Enviorment and health & saftey IMS Training",
  },
  {
    mode: "Virtual",
    duration: "4 Hr",
    title: "ISO 27001:2013 Implementation Training",
    iso: "ISO 27001:2013",
    price: "₹5,000 per participant",
    fees: "Fees per participant",
    description:
      "Complete guide to implementing Information Security Management System in your organization.",
  },
  {
    mode: "Classroom",
    duration: "2 Days",
    title: "ISO 9001:2015 Awareness Training",
    iso: "ISO 13485:2016",
    price: "₹12,000 per participant",
    fees: "Fees per participant",
    description:
      "Awareness training on Medical Devices Quality Management System requirements.",
  },
  {
    mode: "Classroom",
    duration: "2 Days",
    title: "ISO 9001:2015 Quality mangment system",
    iso: "ISO 9001:2015",
    price: "₹12,000 per participant",
    fees: "Fees per participant",
    description: "",
  },
  {
    mode: "Classroom",
    duration: "2 Days",
    title: "ISO 14001:2015 Enviorment mangment system",
    iso: "",
    price: "₹12,000 per participant",
    fees: "Fees per participant",
    description: "",
  },
  {
    mode: "Classroom",
    duration: "2 Days",
    title: "ISO 45001:2015 Enviorment mangment system ",
    iso: "",
    price: "₹12,000 per participant",
    fees: "Fees per participant",
    description: "",
  },
];

const IsoCard = () => {
  return (
    <>
      <section className="isoStandards-training-section">
        <div className="isoStandards-container">
          <div className="isoStandards-training-grid">
            {CarsData.map((card, index) => (
              <div className="isoStandards-training-card" key={index}>
                <div className="isoStandards-card-header">
                  <div className="isoStandards-top-tags">
                    <span className="isoStandards-tag-pill">{card.mode}</span>
                    <span className="isoStandards-tag-pill white">
                      {card.duration}
                    </span>
                  </div>
                  <h3>{card.title}</h3>
                  <p className="isoStandards-iso-sub">{card.iso}</p>
                </div>

                <div className="isoStandards-card-body">
                  <p className="isoStandards-price-label">{card.fees}</p>
                  <h4 className="isoStandards-price">{card.price}</h4>
                  <p className="isoStandards-description">{card.description}</p>
                  <Link to="/IsoCertification" className="isoStandards-btn-enquire">
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: "200px" }} />

      <Footer />
    </>
  );
};

export default IsoCard;
