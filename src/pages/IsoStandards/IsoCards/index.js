import React, { useEffect, useState } from "react";
import "./IsoCards.css";
import { Link } from "react-router-dom";

const IsoCard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          "https://www.sirsonite.in/sirsonite-d/omkaradmin/api/courses",
        );
        const data = await res.json();

        if (data.status) {
          setCourses(data.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="isoStandards-training-section">
      <div className="isoStandards-container">
        <div className="isoStandards-training-grid">
          {courses.map((card, index) => (
            <div className="isoStandards-training-card" key={index}>
              <div className="isoStandards-card-header">
                <div className="isoStandards-top-tags">
                  <span className="isoStandards-tag-pill">{card.badge}</span>
                  <span className="isoStandards-tag-pill white">
                    {card.duration}
                  </span>
                </div>

                <h3>{card.title}</h3>
                <p className="isoStandards-iso-sub">{card.category}</p>
              </div>

              <div className="isoStandards-card-body">
                <p className="isoStandards-price-label">Fees per participant</p>

                <h4 className="isoStandards-price">{card.fees}</h4>

                <p className="isoStandards-description">
                  {card.short_description || "No description available"}
                </p>

                {card.slug && (
                  <Link
                    to={`/iso/${card.slug}`}
                    className="isoStandards-btn-enquire"
                  >
                    Learn More
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsoCard;
