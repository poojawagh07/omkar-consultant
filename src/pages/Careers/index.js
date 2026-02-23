import React from "react";
import "./Careers.css";
import careerImg from "../../assets/Images/Career.img.png";
import careerGrow from "../../assets/Images/Grow-career-img.png";
import whywork from "../../assets/Images/Why-work-section.png";
import Footer from "../../components/Footer/index.js";

const Careers = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="career-section">
        <div className="career-image-wrapper">
          <img src={careerImg} alt="Join our team" className="career-bg" />

          <div className="career-overlay">
            <h1 className="career-title">Join Our Team</h1>
            <p className="career-subtitle">
              Build your career with a leading ISO certification and training
              consultancy
            </p>
          </div>
        </div>
      </section>

      <section className="growCareer-section">
        <div className="growCareer-container">
          <div className="growCareer-left">
            <h2 className="growCareer-heading">
              Grow Your Career with Omkar Consultancy
            </h2>

            <p className="growCareer-text">
              At Omkar Consultancy, we believe our success is built on the
              talent and dedication of our team members. We offer a dynamic work
              environment where you can develop your skills, work on challenging
              projects, and make a real impact in helping organizations achieve
              excellence.
            </p>

            <p className="growCareer-text">
              Join a team of certified professionals who are passionate about
              quality, compliance, and continuous improvement.
            </p>

            <div className="growCareer-features">
              <div className="feature-row">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 7L13.5 15.5L8.5 10.5L2 17"
                      stroke="#0B82AD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 7H22V13"
                      stroke="#0B82AD"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Career Growth</h4>
                  <p>
                    Continuous learning and professional development
                    opportunities
                  </p>
                </div>
              </div>

              <div className="feature-row">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21"
                      stroke="#0B82AD"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="#0B82AD"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13"
                      stroke="#0B82AD"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="#0B82AD"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Collaborative Culture</h4>
                  <p>
                    Work with industry experts in a supportive team environment
                  </p>
                </div>
              </div>

              <div className="feature-row">
                <div className="feature-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M15.4768 12.89L16.9918 21.416C17.0087 21.5164 16.9946 21.6196 16.9514 21.7118C16.9081 21.8039 16.8377 21.8807 16.7497 21.9318C16.6616 21.9829 16.56 22.0059 16.4586 21.9977C16.3571 21.9895 16.2605 21.9506 16.1818 21.886L12.6018 19.199C12.4289 19.0699 12.219 19.0001 12.0033 19.0001C11.7875 19.0001 11.5776 19.0699 11.4048 19.199L7.81875 21.885C7.74007 21.9494 7.64361 21.9883 7.54225 21.9965C7.44088 22.0047 7.33942 21.9818 7.25141 21.9309C7.16341 21.8799 7.09303 21.8033 7.04967 21.7113C7.00631 21.6193 6.99204 21.5163 7.00875 21.416L8.52275 12.89"
                      stroke="#0B82AD"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z"
                      stroke="#0B82AD"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4>Competitive Benefits</h4>
                  <p>
                    Attractive compensation and comprehensive benefits package
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="growCareer-right">
            <img src={careerGrow} alt="Career Growth" />
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="why-container">
          <div className="why-left">
            <img src={whywork} alt="Why work with us" />
          </div>

          <div className="why-right">
            <h2 className="why-heading">Why Work With Us</h2>

            <p className="why-text">
              Join a thriving organization with a proven track record of success
              and a commitment to employee growth and satisfaction.
            </p>

            <div className="why-stats">
              <div className="stat-card">
                <h3>10+</h3>
                <p>Years Experience</p>
              </div>

              <div className="stat-card">
                <h3>500+</h3>
                <p>Successful Projects</p>
              </div>

              <div className="stat-card">
                <h3>50+</h3>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="apply-container">
        <div className="apply-section">
          <div>
            <div className="apply-header">
              <h2 className="apply-title">
                Apply for a Career at Omkar Consultancy
              </h2>

              <p className="apply-subtitle">
                Choose your area of interest and submit your details. Our team
                will get back to you shortly.
              </p>
            </div>
          </div>
          <div className="apply-wrapper">
            <div className="form-row">
              <div className="form-group">
                <label>
                  Full Name <span className="required">*</span>
                </label>
                <input type="Name" placeholder="Enter your full name" />
              </div>

              <div className="form-group">
                <label>
                  Email Address <span className="required">*</span>
                </label>{" "}
                <input type="email" placeholder="your email@example.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Phone number <span className="required">*</span>
                </label>
                <input type="phone" placeholder="+912345678990" />
              </div>

              <div className="form-group">
                <label>
                  Position Applying For <span className="required">*</span>
                </label>
                <select>
                  <option>Position</option>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  Experience Level <span className="required">*</span>
                </label>
                <input type="position" />
              </div>

              <div className="form-group">
                <label>
                  Upload Resume <span className="required">*</span>
                </label>
                <div className="upload-field">
                  <input type="file" />

                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M10 2.5V12.5"
                      stroke="#0B82AD"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.1663 6.66667L9.99967 2.5L5.83301 6.66667"
                      stroke="#0B82AD"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5"
                      stroke="#0B82AD"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="upload-text">Choose file (PDF/DOC)</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Message / Notes (Optional)</label>
              <textarea placeholder="Tell us why you'd be a great fit for this role..." />
            </div>

            <button className="apply-btn">Submit Application</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Careers;
