
// import "./Feedback1.css";
import "./Feedback1.css";
import Footer from "../../components/Footer/index.js";
import { useState } from "react";

const Feedback = () => {
  const [ratings, setRatings] = useState({
    overall: 0,
    service: 0,
    professionalism: 0,
    timeliness: 0,
  });

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    company: "",
    service_used: "",
    recommendation: "",
    experience: "",
    improvement: "",
  });

  const handleRating = (category, value) => {
    setRatings({ ...ratings, [category]: value });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecommendation = (value) => {
    setFormData({ ...formData, recommendation: value });
  };

  const handleSubmit = async () => {
    try {
      if (!formData.full_name || !formData.email || !formData.service_used) {
        alert("Please fill all required fields");
        return;
      }

      if (!formData.recommendation) {
        alert("Please select recommendation");
        return;
      }

      if (
        ratings.overall === 0 ||
        ratings.service === 0 ||
        ratings.professionalism === 0 ||
        ratings.timeliness === 0
      ) {
        alert("Please give all ratings");
        return;
      }

      if (!formData.experience) {
        alert("Please enter your experience");
        return;
      }

      const form = new FormData();

      form.append("full_name", formData.full_name);
      form.append("email", formData.email);
      form.append("company_name", formData.company); 
      form.append("service_used", formData.service_used);
form.append(
  "overall_satisfaction",
  ratings.overall === 0 ? null : ratings.overall
);

form.append(
  "service_quality",
  ratings.service === 0 ? null : ratings.service
);

form.append(
  "professionalism",
  ratings.professionalism === 0 ? null : ratings.professionalism
);

form.append(
  "timeliness_efficiency",
  ratings.timeliness === 0 ? null : ratings.timeliness
);
      form.append("recommendation", formData.recommendation);
      form.append("feedback", formData.experience); 
      form.append("improvement", formData.improvement);

    const res = await fetch(
  "https://sirsonite.in/sirsonite-d/omkaradmin/api/feedback",
  {
    method: "POST",
    headers: {
      Accept: "application/json", 
    },
    body: form,
  }
);

      const text = await res.text();
      console.log("RAW RESPONSE:", text);

      let data;
      try {
        data = JSON.parse(text);
      } catch {
        alert(text); 
        return;
      }

      if (data.status === true) {
        alert("Feedback submitted successfully ✅");
      } else {
        alert(data.message || "Submission failed ❌");
      }
    } catch (error) {
      console.error(error);
      alert("API error ❌");
    }
  };

  const renderStars = (category) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= ratings[category] ? "active" : ""}`}
        onClick={() => handleRating(category, star)}
      >
        {star <= ratings[category] ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <div>


      <section className="feedback-section">
        <div className="feedback-container">
          <div className="feedback-header">
            <div className="feedback-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M15.3665 3.06C15.4249 2.94195 15.5152 2.84258 15.6271 2.7731C15.739 2.70362 15.8681 2.66681 15.9998 2.66681C16.1315 2.66681 16.2606 2.70362 16.3725 2.7731C16.4844 2.84258 16.5747 2.94195 16.6331 3.06L19.7131 9.29867C19.916 9.70929 20.2155 10.0645 20.586 10.3339C20.9564 10.6033 21.3866 10.7788 21.8398 10.8453L28.7278 11.8533C28.8583 11.8722 28.9809 11.9273 29.0818 12.0123C29.1826 12.0972 29.2577 12.2087 29.2985 12.3341C29.3393 12.4596 29.3442 12.5939 29.3126 12.7219C29.281 12.85 29.2142 12.9666 29.1198 13.0587L24.1385 17.9093C23.81 18.2295 23.5642 18.6246 23.4222 19.0608C23.2803 19.497 23.2465 19.9612 23.3238 20.4133L24.4998 27.2667C24.5228 27.3971 24.5087 27.5314 24.4591 27.6542C24.4095 27.7771 24.3264 27.8835 24.2192 27.9613C24.112 28.0392 23.9851 28.0853 23.853 28.0945C23.7208 28.1037 23.5887 28.0756 23.4718 28.0133L17.3145 24.776C16.9088 24.563 16.4574 24.4517 15.9991 24.4517C15.5409 24.4517 15.0895 24.563 14.6838 24.776L8.5278 28.0133C8.4109 28.0752 8.27899 28.1031 8.14706 28.0937C8.01514 28.0843 7.88849 28.0381 7.78152 27.9603C7.67456 27.8825 7.59157 27.7763 7.542 27.6536C7.49243 27.531 7.47827 27.3969 7.50113 27.2667L8.6758 20.4147C8.75339 19.9623 8.71977 19.4979 8.57785 19.0614C8.43592 18.6249 8.18994 18.2295 7.86113 17.9093L2.8798 13.06C2.78459 12.968 2.71712 12.8512 2.68508 12.7228C2.65304 12.5943 2.65771 12.4595 2.69857 12.3336C2.73942 12.2077 2.81482 12.0958 2.91616 12.0106C3.01751 11.9255 3.14073 11.8705 3.2718 11.852L10.1585 10.8453C10.6121 10.7793 11.043 10.6041 11.4139 10.3347C11.7848 10.0652 12.0847 9.7097 12.2878 9.29867L15.3665 3.06Z"
                  stroke="#D1D5DB"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h2>Customer Feedback</h2>
          </div>

          <p className="feedback-text">
            Your feedback helps us improve our services and deliver better
            results. Please take a moment to share your experience with Omkar
            Consultancy.
          </p>
        </div>
      </section>

<section className="customer-info-section">
        <div className="customer-container">
          <h3 className="customer-heading">Customer Information</h3>

          <div className="form-grid">
            <div className="form-group">
              <label>
                Full Name <span>*</span>
              </label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label>
                Email Address <span>*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>

            <div className="form-group">
              <label>
                Service Used <span>*</span>
              </label>
              <input
                type="text"
                name="service_used"
                value={formData.service_used}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="rating-section">
        <div className="rating-container">
          <h3 className="rating-heading">Rate Your Experience</h3>

          <div className="rating-group">
            <label>
              Overall Satisfaction <span>*</span>
            </label>
            <div className="stars-row">
              <div className="stars">{renderStars("overall")}</div>
              <p className="not-rated">
                {ratings.overall === 0 ? "Not rated" : `${ratings.overall}/5`}
              </p>
            </div>
          </div>

          <div className="rating-group">
            <label>
              Service Quality <span>*</span>
            </label>
            <div className="stars-row">
              <div className="stars">{renderStars("service")}</div>
              <p className="not-rated">
                {ratings.service === 0 ? "Not rated" : `${ratings.service}/5`}
              </p>
            </div>
          </div>

          <div className="rating-group">
            <label>
              Professionalism <span>*</span>
            </label>
            <div className="stars-row">
              <div className="stars">{renderStars("professionalism")}</div>
              <p className="not-rated">
                {ratings.professionalism === 0
                  ? "Not rated"
                  : `${ratings.professionalism}/5`}
              </p>
            </div>
          </div>

          <div className="rating-group">
            <label>
              Timeliness & Efficiency <span>*</span>
            </label>
            <div className="stars-row">
              <div className="stars">{renderStars("timeliness")}</div>
              <p className="not-rated">
                {ratings.timeliness === 0
                  ? "Not rated"
                  : `${ratings.timeliness}/5`}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="recommendation-section">
        <div className="recommendation-container">
          <h3 className="recommendation-heading">Recommendation</h3>

          <div className="recommendation-question">
            Would you recommend our services to others? <span>*</span>
          </div>

          <div className="recommendation-options">
            <div
              className="recommendation-card"
              onClick={() => handleRecommendation("Yes")}
            >
              <p>Yes, Definitely</p>
            </div>

            <div
              className="recommendation-card"
              
onClick={() => handleRecommendation("Maybe")}

            >
              <p>Maybe</p>
            </div>

            <div
              className="recommendation-card"
             onClick={() => handleRecommendation("No")}
            >
              <p>Not Likely</p>
            </div>
          </div>
        </div>
      </section>

      <section className="feedback5-section">
        <div className="feedback5-container">
          <h3 className="feedback5-heading">Your Feedback</h3>

          <div className="feedback5-group">
            <label>
              Share your experience with us <span>*</span>
            </label>

            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Tell us about your experience working with Omkar Consultancy..."
            ></textarea>
          </div>

          <div className="feedback5-group">
            <label>How can we improve? (Optional)</label>

            <textarea
              name="improvement"
              value={formData.improvement}
              onChange={handleChange}
              placeholder="Share any suggestions for improvement..."
            ></textarea>
          </div>
        </div>
      </section>

      <section className="submit-section">
        <div className="submit-container">
          <button className="submit-btn" onClick={handleSubmit}>
            Submit Feedback
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;