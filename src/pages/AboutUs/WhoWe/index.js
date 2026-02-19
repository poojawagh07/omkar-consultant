import React from "react";
import "./WhoWe.css";

const WhoWe = () => {
  return (
    <section className="who-section">
      <div className="who-container">
        <div className="inner-section">
          <h2 className="who-title">Who We Are</h2>
          <div className="who-underline"></div>

          <p className="who-text">
            is a trusted management consulting firm specializing in ISO
            certification, compliance management, and business process
            improvement. With years of industry expertise and a client-first
            approach, we help organizations across diverse sectors achieve
            internationally recognized standards and operational excellence.
          </p>

          <p className="who-text second">
            We believe in practical, customized solutions that align with your
            business goals. Our team of experienced consultants brings deep
            domain knowledge, clarity in execution, and unwavering commitment to
            delivering results on time, every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWe;
