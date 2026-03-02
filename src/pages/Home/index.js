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

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll(".num");

    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      const speed = 200;
      const increment = target / speed;

      let count = 0;

      const updateCount = () => {
        count += increment;

        if (count < target) {
          counter.innerText = Math.ceil(count) + "+";
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCount();
    });
  }, []);

  useEffect(() => {
    const grid = document.querySelector("#servicesCarousel .services-grid");
    const nextBtn = document.querySelector(".carousel-control-next");
    const prevBtn = document.querySelector(".carousel-control-prev");

    if (!grid || grid.dataset.loaded) return;
    grid.dataset.loaded = "true";

    const cards = grid.innerHTML;
    grid.innerHTML = cards + cards;

    let position = 0;
    const cardWidth = grid.querySelector(".service-card").offsetWidth + 15;
    const totalCards = grid.children.length;

    nextBtn.addEventListener("click", () => {
      position++;

      grid.style.transition = "transform 0.5s ease";
      grid.style.transform = `translateX(-${position * cardWidth}px)`;

      if (position >= totalCards / 2) {
        setTimeout(() => {
          grid.style.transition = "none";
          position = 0;
          grid.style.transform = `translateX(0px)`;
        }, 500);
      }
    });

    prevBtn.addEventListener("click", () => {
      position--;

      if (position < 0) {
        position = totalCards / 2;
        grid.style.transition = "none";
        grid.style.transform = `translateX(-${position * cardWidth}px)`;
      }

      setTimeout(() => {
        grid.style.transition = "transform 0.5s ease";
        grid.style.transform = `translateX(-${position * cardWidth}px)`;
      }, 10);
    });
  }, []);

  return (
    <>

      <section className="hero-slider">
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
              <div className="counter">
                <span className="num" data-target="100">
                  0+
                </span>
                <span className="label">Certified Clients</span>
              </div>

              <div className="counter">
                <span className="num" data-target="15">
                  0+
                </span>
                <span className="label">Years Experience</span>
              </div>

              <div className="counter">
                <span className="num" data-target="1000">
                  0+
                </span>
                <span className="label">Trained employees</span>
              </div>

              <div className="counter">
                <span className="num" data-target="25000">
                  0+
                </span>
                <span className="label">Man hrs of audit efforts</span>
              </div>

              <div className="counter">
                <span className="num" data-target="5">
                  0
                </span>
                <span className="label">Auditing standards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}

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
                services. We believe that an ISO Management system can provide
                tremendous benefits with increased discipline and consistency.
                Omkar Consultants is a Management Consultancy house based in
                Ambernath, Central Mumbai providing Management Consultancy
                Services to business sectors small, medium and large
                organizations PAN India.
              </p>

              <p>
                Omkar Consultants offers a unique fixed price business model and
                an innovative performance guarantee. We rely on some specific
                characteristics possessed by us for maintaining a reputed &
                trusted position among consultancy providers. These are,
                Customer Focus, Economical and Time Specific deliverance, Prompt
                Service, Effective training and appropriate documentation
                expertise.
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

      {/* SERVICES */}

      <Services />

      {/* WHY CHOOSE */}

      <section className="why-choose-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Why Choose Omkar Consultancy</h2>
            <p>
              Your trusted partner for ISO certification and training excellence
            </p>
          </div>

          <div className="features-grid">
            <div
              className="feature-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="feature-icon">
                <img src={why1} alt="whyChoose icon" />
              </div>
              <h3>10+ Years Experience</h3>
              <p>
                Extensive experience in ISO certification and consulting across
                industries
              </p>
            </div>

            <div
              className="feature-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="feature-icon">
                <img src={why2} alt="whyChoose icon" />
              </div>
              <h3>Certified Experts</h3>
              <p>
                Team of IRCA certified lead auditors and experienced consultants
              </p>
            </div>

            <div
              className="feature-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="feature-icon">
                <img src={why3} alt="whyChoose icon" />
              </div>
              <h3>Pan India Support</h3>
              <p>
                Services available across India with dedicated regional support
              </p>
            </div>

            <div
              className="feature-item"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="feature-icon">
                <img src={why4} alt="whyChoose icon" />
              </div>
              <h3>High Success Rate</h3>
              <p>
                100% success rate in certification audits with proper
                preparation
              </p>
            </div>

            <div
              className="feature-item"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="feature-icon">
                <img src={why5} alt="whyChoose icon" />
              </div>
              <h3>Quick Turnaround</h3>
              <p>
                Fast and efficient certification process without compromising
                quality
              </p>
            </div>

            <div
              className="feature-item"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="feature-icon">
                <img src={why6} alt="whyChoose icon" />
              </div>
              <h3>Quality Assured</h3>
              <p>
                Proven methodologies and best practices for sustainable success
              </p>
            </div>
          </div>
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
