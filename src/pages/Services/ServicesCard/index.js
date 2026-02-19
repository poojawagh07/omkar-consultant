import React from "react";
import searchIcon from "../../../assets/Images/search-icon.svg";
import fileIcon from "../../../assets/Images/file-icon.svg";
import training from "../../../assets/Images/Trainini-card-icon.svg";
import groupIcon from "../../../assets/Images/group-icon.svg";
import VideoIcon from "../../../assets/Images/Video_icon1.svg";
import Footer from "../../../components/Footer";
import groupIcon2 from "../../../assets/Images/Service_card_Group_icon.svg";
import DocumentIcon from "../../../assets/Images/service_card_document_icon.svg";
import CertigicateIcon from "../../../assets/Images/service_card_certificate_icon.svg";
import "./ServicesCard.css";

const ServiceCard = () => {
  const Service = [
    {
      icon: searchIcon,
      title: "Gap Audit",
      desc: "Identify compliance gaps and improvement areas in your management systems",
      class: "service-card teal-card",
    },
    {
      icon: fileIcon,
      title: "Internal Audit",
      desc: "Identify compliance gaps and improvement areas",
      class: "service-card1 white-card",
    },
    {
      icon: training,
      title: "Customized Trainings",
      desc: "Tailored training programs designed for your team",
      class: "service-card teal-card",
    },
    {
      icon: groupIcon,
      title: "Transition Of Standards",
      desc: "Seamless migration to updated ISO standards",
      class: "service-card1 white-card",
    },
    {
      icon: VideoIcon,
      title: "Virtual Trainings",
      desc: "Flexible online training sessions accessible from anywhere.",
      class: "service-card teal-card",
    },
    {
      icon: groupIcon2,
      title: "Supplier Audits",
      desc: "Evaluate and qualify your supply chain with thorough assessments.",
      class: "service-card1 white-card",
    },
    {
      icon: DocumentIcon,
      title: "Documentation",
      desc: "Professional documentation services for quality management systems.",
      class: "service-card teal-card",
    },
    {
      icon: CertigicateIcon,
      title: "Certification Upgrades",
      desc: "Support for upgrading your certification with accredited bodies.",
      class: "service-card1 white-card",
    },
  ];

  const firstRow = Service.slice(0, 4);
  const secondRow = Service.slice(4, 8);

  return (
    <section className="services-section">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>
          Comprehensive ISO consulting and training solutions tailored to your
          business needs
        </p>
      </div>

      <div className="container">
        {/* ROW 1 */}
        <div className="services-grid">
          {firstRow.map((card, i) => (
            <div key={i} className="service-item">
              <div className={card.class}>
                <div className="icon-box">
                  <img src={card.icon} alt={card.title} />
                </div>

                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>

              <a href="#" className="learn-more">
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>

        {/* ROW 2 */}
        <div className="services-grid2">
          {secondRow.map((card, i) => (
            <div key={i} className="service-item">
              <div className={card.class}>
                <div className="icon-box">
                  <img src={card.icon} alt={card.title} />
                </div>

                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>

              <a href="#" className="learn-more">
                Learn More <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ServiceCard;
