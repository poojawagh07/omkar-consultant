import React from "react";
import "./Vision.css";

const Vision = () => {
  return (
    <section className="vision-section">
      <span className="vision-badge">What Drives Us</span>

      <h2>Vision & Mission</h2>
      <p className="vision-sub">
        Driving quality, compliance & business excellence
      </p>

      <div className="vision-grid">
        {/* Vision Card */}
        <div className="vision-card">
          <div className="inner-vision">
            <div className="figma-glass"></div>
            <div className="figma-curve"></div>

            <div className="vision-top">
              <div className="vision-icon">
                <i className="fas fa-eye"></i>
              </div>
              <div className="vision-label">VISION</div>
            </div>

            <h3>
              Shaping Businesses
              <br /> Through Global Standards
            </h3>

            <p className="vision-paragraph">
              To empower organizations with robust management systems by
              delivering expert ISO consultancy that drives quality,
              consistency, and long-term business excellence.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="vision-card">
          <div className="inner-vision">
            <div className="figma-glass"></div>
            <div className="figma-curve"></div>

            <div className="vision-top">
              <div className="vision-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <div className="vision-label">MISSION</div>
            </div>
            <div className="Vision-cards-heading">
              <h3>
                Delivering Compliance <br />
                with Confidence
              </h3>
            </div>

            <p className="vision-paragraph">
              To provide practical, cost-effective, and timely ISO solutions by
              combining expert guidance, customized training, and end-to-end
              support— helping businesses grow with confidence.
            </p>
          </div>
        </div>
      </div>

      <a href="#" className="vision-btn">
        Let’s Build Excellence Together
      </a>
    </section>
  );
};

export default Vision;
