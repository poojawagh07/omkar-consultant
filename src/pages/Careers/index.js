

import React, { useEffect, useState } from "react";
import "./Careers.css";
import careerImg from "../../assets/Images/Career.img.png";
import careerGrow from "../../assets/Images/Grow-career-img.png";
import whywork from "../../assets/Images/Why-work-section.png";
import Footer from "../../components/Footer/index.js";

const Careers = () => {
  const [careerData, setCareerData] = useState(null);
const [data, setData] = useState(null);


  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    position: "",
    experience_level: "",
    resume: null,
    message: "",
  });

  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const res = await fetch(
          "https://www.sirsonite.in/sirsonite-d/omkaradmin/api/career"
        );
        const result = await res.json();

        if (result?.data) {
          setCareerData(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCareers();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "phone") {
      const numeric = value.replace(/\D/g, "");
      setFormData({ ...formData, phone: numeric });
      return;
    }

    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    if (!formData.full_name.trim()) return "Full Name is required";

    if (!formData.email.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Enter valid email";

    if (!formData.phone.trim()) return "Phone number is required";
    if (!/^[6-9]\d{9}$/.test(formData.phone))
      return "Enter valid 10-digit phone number";

    if (!formData.position.trim()) return "Position is required";
    if (!formData.experience_level.trim())
      return "Experience level is required";

    if (!formData.resume) return "Resume is required";

    return null;
  };

  const handleSubmit = async () => {
    const error = validate();
    if (error) {
      alert(error);
      return;
    }

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) form.append(key, formData[key]);
    });

    try {
      const res = await fetch(
        "https://sirsonite.in/sirsonite-d/omkaradmin/api/career-apply",
        {
          method: "POST",
          body: form,
        }
      );

      if (res.ok) {
        alert("Application submitted successfully!");

        setFormData({
          full_name: "",
          email: "",
          phone: "",
          position: "",
          experience_level: "",
          resume: null,
          message: "",
        });

        document.querySelector('input[type="file"]').value = "";
      } else {
        alert("Server error");
      }
    } catch {
      alert("Something went wrong!");
    }
  };


useEffect(() => {
    fetch("https://www.sirsonite.in/sirsonite-d/omkaradmin/api/career-why")
      .then((res) => res.json())
      .then((res) => {
        if (res.status) {
          setData(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  if (!data) return <h6>Loading...</h6>;

  return (
    <div>
      <section className="career-section">
        <div className="career-image-wrapper">
          <img src={careerImg} alt="Join our team" className="career-bg" />

          <div className="career-overlay">
            <h1 className="career-title">Join Our Team</h1>
            <p className="career-subtitle">
              Build your career with a leading ISO certification and training consultancy
            </p>
          </div>
        </div>
      </section>

      <section className="growCareer-section">
        <div className="growCareer-container">
          <div className="growCareer-left">
            <h2 className="growCareer-heading">
              {careerData?.title || "Loading..."}
            </h2>

            <div
              className="growCareer-text"
              dangerouslySetInnerHTML={{
                __html: careerData?.description1 || "",
              }}
            />

            <div
              className="growCareer-text"
              dangerouslySetInnerHTML={{
                __html: careerData?.description2 || "",
              }}
            />

            <div className="growCareer-features">
              <div>
                <h4>{careerData?.feature1_title}</h4>
                <p>{careerData?.feature1_description}</p>
              </div>
              <div>
                <h4>{careerData?.feature2_title}</h4>
                <p>{careerData?.feature2_description}</p>
              </div>
              <div>
                <h4>{careerData?.feature3_title}</h4>
                <p>{careerData?.feature3_description}</p>
              </div>
            </div>
          </div>

          <div className="growCareer-right">
            <img src={careerData?.image || careerGrow} alt="Career Growth" />
          </div>
        </div>
      </section>

      <section className="why-section">
      <div className="why-container">
        
        {/* LEFT IMAGE */}
        <div className="why-left">
          <img src={data.image} alt="Why work with us" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="why-right">
          <h2 className="why-heading">{data.title}</h2>

          <p className="why-text">{data.description}</p>

          <div className="why-stats">
            
            <div className="stat-card">
              <h3>{data.years_experience}+</h3>
              <p>Years Experience</p>
            </div>

            <div className="stat-card">
              <h3>{data.successful_projects}+</h3>
              <p>Successful Projects</p>
            </div>

            <div className="stat-card">
              <h3>{data.team_members}+</h3>
              <p>Team Members</p>
            </div>

          </div>
        </div>

      </div>
    </section>
      <section className="apply-container">
        <div className="apply-section">
          <div className="apply-header">
            <h2 className="apply-title">
              Apply for a Career at Omkar Consultancy
            </h2>

            <p className="apply-subtitle">
              Choose your area of interest and submit your details.
            </p>
          </div>

          <div className="apply-wrapper">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name <span>*</span></label>
                <input name="full_name" value={formData.full_name} onChange={handleChange}/>
              </div>

              <div className="form-group">
                <label>Email Address <span>*</span></label>
                <input name="email" value={formData.email} onChange={handleChange}/>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone number <span>*</span></label>
                <input name="phone" value={formData.phone} onChange={handleChange} maxLength="10"/>
              </div>

              <div className="form-group">
                <label>Position Applying For <span>*</span></label>
                <input
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder="Enter Position"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Experience Level <span>*</span></label>
                <input name="experience_level" value={formData.experience_level} onChange={handleChange}/>
              </div>

              <div className="form-group">
                <label>Upload Resume <span>*</span></label>
                <div className="upload-field">
                  <input type="file" name="resume" onChange={handleChange}/>
                  <span className="upload-text">
                    {formData.resume ? formData.resume.name : "Choose file (PDF/DOC)"}
                  </span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Message / Notes</label>
              <textarea name="message" value={formData.message} onChange={handleChange}/>
            </div>

            <button className="apply-btn" onClick={handleSubmit}>
              Submit Application
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;