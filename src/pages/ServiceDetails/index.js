import React, { useEffect, useState } from "react";
import "./ServiceDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import ConsultationModal from "../../components/ConsultationModal/index.js";
import { FiCheckCircle } from "react-icons/fi";
import Footer from "../../components/Footer/index.js";
import Gap1 from "../../assets/Images/GapAnalysis1.png";

const ServiceDetails = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!slug || slug === "undefined") return;

    fetch(`https://www.sirsonite.in/sirsonite-d/omkaradmin/api/service/${slug}`)
      .then((res) => res.json())
      .then((data) => setService(data.data))
      .catch((err) => console.log(err));
  }, [slug]);

  if (!service) {
    return <p style={{ textAlign: "center" }}>Loading...</p>;
  }

  return (
    <div>
      <section className="gap-section">
        <div className="gap-container">
          <h1 className="gap-heading">{service.title}</h1>

          {service.content1 && (
            <p
              className="gap-description"
              dangerouslySetInnerHTML={{ __html: service.content1 }}
            />
          )}
        </div>
      </section>

      <section className="service-overview-section">
        <div className="service-container">
          <div className="service-image">
            <img src={service.image || Gap1} alt={service.title} />
          </div>

          <div className="service-content">
            <h2>Service Overview</h2>
            {service.content1 && (
              <p dangerouslySetInnerHTML={{ __html: service.content1 }} />
            )}

            {service.content2 && (
              <p dangerouslySetInnerHTML={{ __html: service.content2 }} />
            )}
            <button
              className="consult-btn-servises"
              onClick={() => setShowModal(true)}
            >
              Get Consultation <span className="btn-icon">💬</span>
            </button>
          </div>
        </div>
      </section>

      {service.features?.length > 0 && (
        <section className="features-section">
          <div className="features-container">
            <h2 className="features-title">Key Features</h2>

            <div className="features-grid">
              {service.features.map((item, i) => {
                const text = typeof item === "string" ? item : item.text;

                const icon =
                  typeof item === "object" && item.icon
                    ? item.icon
                    : "https://cdn-icons-png.flaticon.com/512/190/190411.png";

                return (
                  <div key={i} className="feature-card">
                    <img src={icon} alt="icon" className="feature-icon" />
                    <p>{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {(service.benefits?.length > 0 || service.who_needs?.length > 0) && (
        <section className="benefits-section">
          <div className="benefits-wrapper">
            {service.benefits?.length > 0 && (
              <div className="benefits-column">
                <h3>Benefits</h3>

                <ul className="benefits-list">
                  {service.benefits.map((item, i) => (
                    <li key={i}>
                      <FiCheckCircle className="li_Icon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.who_needs?.length > 0 && (
              <div className="benefits-column">
                <h3>Who Needs This</h3>

                <ul className="benefits-list-2">
                  {service.who_needs.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      )}

      {service.process_steps?.length > 0 && (
        <section className="process-section">
          <h2 className="process-heading">Our Process</h2>

          <div className="process-grid">
            {service.process_steps.map((step, i) => (
              <div key={i} className="process-card">
                <div className="process-number">{step.step_no}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Get Started?</h2>

          <p>
            Contact us today for a free consultation and learn how our service
            can help your organization
          </p>

          <div className="cta-buttons">
            <button className="cta-primary" onClick={() => setShowModal(true)}>
              Get Free Consultation
            </button>

            <button
              className="cta-outline"
              onClick={() => navigate("/Services")}
            >
              View All Services →
            </button>
          </div>
        </div>
      </section>

      {showModal && (
        <ConsultationModal
          show={showModal}
          onClose={() => setShowModal(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default ServiceDetails;
