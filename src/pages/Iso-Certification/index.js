import "./Iso-Certification.css";
import Footer from "../../components/Footer/index.js";
import ContactModal from "../../components/ConsultationModal/index.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const IsoCertification = () => {
  const { slug } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [course, setCourse] = useState(null);

useEffect(() => {
  const fetchCourse = async () => {
    try {
      const decodedISO = decodeURIComponent(slug);

      console.log("Slug:", slug);
      console.log("Decoded:", decodedISO);

      const res = await fetch(
        `https://www.sirsonite.in/sirsonite-d/omkaradmin/api/course/${decodedISO}`
      );

      const data = await res.json();

      console.log("API Response:", data);

      if (data.success) {
        setCourse(data.data);
      } else {
        setCourse("no-data");
      }
    } catch (err) {
      console.error(err);
      setCourse("error");
    }
  };

  fetchCourse();
}, [slug]);
if (course === null) {
  return <h6 style={{ textAlign: "center" }}>Loading...</h6>;
}

if (course === "no-data" || course === "error") {
  return <h6 style={{ textAlign: "center" }}>No Data Found</h6>;
}
  return (
    <div>
      <section className="iso-hero-section">
        <div className="iso-hero-container">
          <div className="iso-hero-content">
            <span className="iso-hero-badge">{course.category}</span>

            <h1 className="iso-hero-title">
              {course.standard}{" "}
              <span className="iso-hero-highlight">Certification</span>
            </h1>

            <p className="iso-hero-description">{course.short_description}</p>

            <div className="iso-hero-buttons">
              <button
                onClick={() => setShowModal(true)}
                className="iso-hero-btn-primary"
              >
                Enquiry Now
              </button>
            </div>
          </div>

          <div className="iso-hero-image-wrapper">
            <img src={course.image1} alt="ISO" className="iso-hero-image" />
          </div>
        </div>
      </section>

      <section className="iso-about-main">
        <div className="iso-about-wrapper">
          <div className="iso-about-left">
            <img src={course.image2} alt="ISO Office" />
          </div>

          <div className="iso-about-right">
            <span className="iso-about-tag">About {course.standard}</span>

            <h2 className="iso-about-title">Why {course.standard} Matters</h2>

            <p
              className="iso-about-desc"
              dangerouslySetInnerHTML={{
                __html: course.long_description,
              }}
            />

            <h3 className="iso-about-subtitle">
              Key Features of {course.standard}
            </h3>

            <div className="iso-feature-grid">
              {course.key_features?.map((item, i) => (
                <div className="iso-feature-item" key={i}>
                  ✔ {item}
                </div>
              ))}
            </div>

            <div className="iso-why-card">
              <h4>Why Choose Us?</h4>

              {course.why_choose?.map((item, i) => (
                <div className="iso-why-item" key={i}>
                  ✔ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="iso-process-section">
        <div className="iso-process-container">
          <div className="iso-process-header">
            <h2 className="iso-process-title">Our Certification Process</h2>
          </div>

          <div className="iso-process-grid">
            {course.certification_process?.map((step, i) => (
              <div className="iso-process-card" key={i}>
                <div className="iso-process-number">{i + 1}</div>
                <h3>Step {i + 1}</h3>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <ContactModal show={showModal} onClose={() => setShowModal(false)} />
      </section>

      <Footer />
    </div>
  );
};

export default IsoCertification;
