import "./Home.css";
import Contact from "./Contact/index.js";
import Training from "./Training/index.js";
import Footer from "../../components/Footer";
import consultTem from "../../assets/Images/consult_team.png";

import why1 from "../../assets/Images/why-choose-1.svg";
import why2 from "../../assets/Images/Why-choose-2.svg";
import why3 from "../../assets/Images/why-choose-icon-3.svg";
import why4 from "../../assets/Images/why-choose-icon-4.svg";
import why5 from "../../assets/Images/why-choose-icon-5.svg";
import why6 from "../../assets/Images/why-choose-icon-6.svg";

import ConsultModal from "../../components/ConsultationModal/index.js";
import Services from "./Services/index.js";

import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const fallbackFeatures = [
  { title: "Expert Team", subtitle: "Highly experienced consultants" },
  { title: "Proven Results", subtitle: "Successful ISO certifications" },
  { title: "Client Focused", subtitle: "Tailored solutions for your business" },
  { title: "Affordable", subtitle: "Cost-effective services" },
  { title: "Fast Process", subtitle: "Quick and smooth certification" },
  { title: "Trusted Partner", subtitle: "Long-term business support" },
];

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [banner, setBanner] = useState(null);
  const [features, setFeatures] = useState(fallbackFeatures);
  const [loading, setLoading] = useState(true);
  const [counters, setCounters] = useState([]);

  const icons = [why1, why2, why3, why4, why5, why6];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
  const controller = new AbortController();

  fetch(
    "https://www.sirsonite.in/sirsonite-d/omkaradmin/api/home-banner",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      signal: controller.signal,
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log("HOME API:", data);

      if (data?.banner) {
        setBanner(data.banner);
      }

      if (data?.counters) {
        setCounters(data.counters); // ✅ THIS WAS MISSING
      }
    })
    .catch((err) => console.log("Banner API failed:", err));

  setTimeout(() => controller.abort(), 5000);
  return () => controller.abort();
}, []);



  useEffect(() => {
    const controller = new AbortController();

    fetch(
      "https://www.sirsonite.in/sirsonite-d/omkaradmin/api/why-choose",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        signal: controller.signal,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("WHY API:", data);

        if (data?.data && Array.isArray(data.data)) {
          setFeatures(data.data);
        }
      })
      .catch((err) => {
        console.log("Why API failed → using fallback", err);
      })
      .finally(() => setLoading(false));

    setTimeout(() => controller.abort(), 5000);
    return () => controller.abort();
  }, []);

  return (
    <>
      <section
        className="hero-slider"
        style={{
          backgroundImage: banner ? `url(${banner.image})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-bg-overlay"></div>

        <div className="container hero-flex">
          <div className="hero-text-side">
            <button
              className="btn-hero-main"
              onClick={() => setShowModal(true)}
            >
              <span>Get free Consultation</span>
            </button>

            <div className="hero-counters">
  {counters.map((item, i) => (
    <div className="counter" key={i}>
      <span className="num">{item.value}</span>
      <span className="label">{item.name}</span>
    </div>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-us">
        <div className="container">
          <div className="about-header" data-aos="fade-up">
            <h2>About Us</h2>
            <p>Driving quality, compliance & business excellence</p>
          </div>

          <div className="about-grid">
            <div className="about-content" data-aos="fade-right">
              <h3>Your Trusted Partner in Consultancy Solutions</h3>

              <p>
                Established in the year 2010, Omkar Consultants, Ambarnath,
                India, is a promising Service provider in Management Consultancy
                services.
              </p>

              <Link to="about" className="btn-knowMore">
                Know More
              </Link>
            </div>

            <div className="about-image" data-aos="fade-left">
              <img src={consultTem} alt="Consultancy Team" />
            </div>
          </div>
        </div>
      </section>

      <Services />

      {/* WHY CHOOSE */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Choose Omkar Consultants</h2>
            <p>
              Your trusted partner for ISO certification and training excellence
            </p>
          </div>

          {loading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            <div className="features-grid">
              {features.map((item, index) => (
                <div className="feature-item" key={index}>
                  <div className="feature-icon">
                    <img
                      src={icons[index % icons.length]}
                      alt={item.title}
                    />
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Training />
      <Contact />
      <Footer />

      <ConsultModal show={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Home;