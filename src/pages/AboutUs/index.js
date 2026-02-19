   import React from "react";
   import Vision from "./Vision/index.js"
   import WhoWe from "./WhoWe/index.js"
   import Testimonials from "./Testimonial/index.js";
   import PartnerSection from "./PartnerSection/index.js"
   import Footer from "../../components/Footer";
import "./About.css";
const AboutUS=()=>{
  return(
    <>
 

    <section className="hero-section">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <h1>
          Building Trust Through Compliance & <br />
          Quality Excellence
        </h1>

        <p>
          Omkar Consultancy empowers businesses with ISO certification,
          compliance solutions, and strategic consulting to achieve
          operational excellence and sustained growth.
        </p>
      </div>
    </section>

<Vision/>
<WhoWe/>
<Testimonials/>
<PartnerSection/>
<Footer/>
    </>
  )
}
export default AboutUS;