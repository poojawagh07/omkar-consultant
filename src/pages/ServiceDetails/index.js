import React from "react";
import "./ServiceDetails.css";
import { useState } from "react";
import Gap1 from "../../assets/Images/GapAnalysis1.png";
import { FiCheckCircle } from "react-icons/fi";
import ConsultationModal from "../../components/ConsultationModal/index.js";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/index.js";
const ServiceDetails = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <section className="gap-section">
        <div className="gap-container">
          <h1 className="gap-heading">Gap Analysis</h1>

          <p className="gap-description">
            Our comprehensive gap analysis service helps you understand exactly
            where your organization stands in relation to ISO standard
            requirements. We identify gaps, prioritize actions, and provide a
            clear roadmap to certification.
          </p>
        </div>
      </section>

      <section className="service-overview-section">
        <div className="service-container">
          <div className="service-image">
            <img src={Gap1} alt="Gap analysis" />
          </div>

          <div className="service-content">
            <h2>Service Overview</h2>

            <p>
              Gap analysis is the critical first step in your ISO certification
              journey. Our expert consultants conduct a thorough assessment of
              your existing processes, documentation, and practices against the
              specific requirements of your target ISO standard.
            </p>

            <p>
              We use proven methodologies and industry best practices to
              evaluate your current state, identify areas of non-compliance, and
              provide practical recommendations for improvement. Our approach is
              collaborative, working closely with your team to ensure accurate
              assessment and actionable outcomes.
            </p>

            <button className="consult-btn">
              Get Consultation
              <span className="btn-icon">💬</span>
            </button>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <h2 className="features-title">Key Features</h2>

          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">✓</span>
              <p>Current state assessment</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">✓</span>
              <p>Detailed gap identification</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">✓</span>
              <p>Actionable recommendations</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">✓</span>
              <p>Priority-based approach</p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefits-wrapper">
          <div className="benefits-column">
            <div className="benefits-title">
              <div className="benefits-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M15.4768 12.89L16.9918 21.416C17.0087 21.5164 16.9946 21.6196 16.9514 21.7118C16.9081 21.8039 16.8377 21.8807 16.7497 21.9318C16.6616 21.9829 16.56 22.0059 16.4586 21.9977C16.3571 21.9895 16.2605 21.9506 16.1818 21.886L12.6018 19.199C12.4289 19.0699 12.219 19.0001 12.0033 19.0001C11.7875 19.0001 11.5776 19.0699 11.4048 19.199L7.81875 21.885C7.74007 21.9494 7.64361 21.9883 7.54225 21.9965C7.44088 22.0047 7.33942 21.9818 7.25141 21.9309C7.16341 21.8799 7.09303 21.8033 7.04967 21.7113C7.00631 21.6193 6.99204 21.5163 7.00875 21.416L8.52275 12.89"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3>Benefits</h3>
            </div>

            <ul className="benefits-list">
              <li>
                {" "}
                <FiCheckCircle className="li_Icon" />
                Clear understanding of compliance status
              </li>
              <li>
                {" "}
                <FiCheckCircle className="li_Icon" />
                Prioritized action plan for implementation
              </li>
              <li>
                {" "}
                <FiCheckCircle className="li_Icon" />
                Resource optimization and cost savings
              </li>
              <li>
                {" "}
                <FiCheckCircle className="li_Icon" />
                Reduced certification timeline
              </li>
              <li>
                {" "}
                <FiCheckCircle className="li_Icon" />
                Risk identification and mitigation
              </li>
              <li>
                {" "}
                <FiCheckCircle className="li_Icon" />
                <i>Foundation for successful certification</i>
              </li>
            </ul>
          </div>

          <div className="benefits-column">
            <div className="benefits-title">
              <div className="benefits-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3>Who Needs This</h3>
            </div>

            <ul className="benefits-list-2">
              <li>Organizations starting their ISO certification journey</li>
              <li>Companies seeking to understand their compliance status</li>
              <li>
                Businesses planning for certification within a specific timeline
              </li>
              <li>Organizations that want to optimize certification costs</li>
              <li>Companies with existing systems wanting validation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="process-section">
        <h2 className="process-heading">Our Process</h2>

        <div className="process-grid">
          <div className="process-card">
            <div className="process-number">1</div>
            <h3>Initial Consultation</h3>
            <p>
              Understanding your business, processes, and certification
              objectives
            </p>
          </div>

          <div className="process-card">
            <div className="process-number">2</div>
            <h3>Documentation Review</h3>
            <p>Reviewing existing policies, procedures, and records</p>
          </div>

          <div className="process-card">
            <div className="process-number">3</div>
            <h3>On-site Assessment</h3>
            <p>Evaluating actual practices and process implementation</p>
          </div>

          <div className="process-card">
            <div className="process-number">4</div>
            <h3>Gap Identification</h3>
            <p>Detailed analysis of gaps against ISO requirements</p>
          </div>

          <div className="process-card">
            <div className="process-number">5</div>
            <h3>Report & Recommendations</h3>
            <p>Comprehensive report with prioritized action items</p>
          </div>

          <div className="process-card">
            <div className="process-number">6</div>
            <h3>Implementation Planning</h3>
            <p>Creating a roadmap for closing identified gaps</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Get Started?</h2>

          <p>
            Contact us today for a free consultation and learn how our gap
            analysis service can help your organization
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
