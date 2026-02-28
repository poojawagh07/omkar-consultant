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

  const handleRating = (category, value) => {
    setRatings({ ...ratings, [category]: value });
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
              <input type="text" placeholder="Enter your full name" />
            </div>

            <div className="form-group">
              <label>
                Email Address <span>*</span>
              </label>
              <input type="email" placeholder="your.email@example.com" />
            </div>

            <div className="form-group">
              <label>Company Name</label>
              <input type="text" placeholder="Your company name" />
            </div>

            <div className="form-group">
              <label>
                Service Used <span>*</span>
              </label>
              <input type="text" />
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
            <div className="recommendation-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M20.0013 7.84001L18.668 13.3333H26.4413C26.8553 13.3333 27.2636 13.4297 27.6339 13.6149C28.0042 13.8 28.3262 14.0688 28.5746 14.4C28.823 14.7312 28.9909 15.1157 29.065 15.523C29.139 15.9303 29.1172 16.3492 29.0013 16.7467L25.8946 27.4133C25.7331 27.9672 25.3962 28.4538 24.9346 28.8C24.473 29.1462 23.9116 29.3333 23.3346 29.3333H5.33464C4.62739 29.3333 3.94911 29.0524 3.44902 28.5523C2.94892 28.0522 2.66797 27.3739 2.66797 26.6667V16C2.66797 15.2928 2.94892 14.6145 3.44902 14.1144C3.94911 13.6143 4.62739 13.3333 5.33464 13.3333H9.01464C9.51075 13.3331 9.99695 13.1944 10.4186 12.933C10.8402 12.6715 11.1805 12.2976 11.4013 11.8533L16.0013 2.66667C16.6301 2.67446 17.249 2.82423 17.8117 3.1048C18.3745 3.38537 18.8665 3.78948 19.2512 4.28694C19.6358 4.7844 19.9031 5.36235 20.033 5.97761C20.1628 6.59286 20.152 7.22952 20.0013 7.84001Z"
                  stroke="#4A5565"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.33203 13.3333V29.3333"
                  stroke="#4A5565"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Yes, Definitely</p>
            </div>

            <div className="recommendation-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M29.3346 22.6667C29.3346 23.3739 29.0537 24.0522 28.5536 24.5523C28.0535 25.0524 27.3752 25.3333 26.668 25.3333H9.1053C8.39812 25.3335 7.71995 25.6145 7.21997 26.1147L4.28397 29.0507C4.15158 29.183 3.98291 29.2732 3.79929 29.3097C3.61567 29.3462 3.42534 29.3275 3.25238 29.2558C3.07941 29.1842 2.93157 29.0629 2.82755 28.9072C2.72353 28.7516 2.66799 28.5685 2.66797 28.3813V6.66667C2.66797 5.95942 2.94892 5.28115 3.44902 4.78105C3.94911 4.28095 4.62739 4 5.33464 4H26.668C27.3752 4 28.0535 4.28095 28.5536 4.78105C29.0537 5.28115 29.3346 5.95942 29.3346 6.66667V22.6667Z"
                  stroke="#4A5565"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Maybe</p>
            </div>

            <div className="recommendation-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M11.9987 24.16L13.332 18.6667L5.5587 18.6667C5.14471 18.6667 4.73641 18.5703 4.36613 18.3851C3.99585 18.2 3.67376 17.9312 3.42536 17.6C3.17697 17.2688 3.0091 16.8843 2.93505 16.477C2.86099 16.0697 2.88278 15.6508 2.9987 15.2533L6.10536 4.58666C6.26692 4.03275 6.60377 3.54619 7.06536 3.19999C7.52695 2.8538 8.08838 2.66666 8.66536 2.66666L26.6654 2.66666C27.3726 2.66666 28.0509 2.94761 28.551 3.44771C29.0511 3.94781 29.332 4.62608 29.332 5.33333L29.332 16C29.332 16.7072 29.0511 17.3855 28.551 17.8856C28.0509 18.3857 27.3726 18.6667 26.6654 18.6667H22.9854C22.4893 18.6669 22.003 18.8056 21.5814 19.067C21.1598 19.3285 20.8195 19.7024 20.5987 20.1467L15.9987 29.3333C15.3699 29.3255 14.751 29.1758 14.1883 28.8952C13.6255 28.6146 13.1335 28.2105 12.7488 27.7131C12.3642 27.2156 12.0969 26.6376 11.967 26.0224C11.8372 25.4071 11.848 24.7705 11.9987 24.16Z"
                  stroke="#4A5565"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.668 18.6667L22.668 2.66667"
                  stroke="#4A5565"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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

            <textarea placeholder="Tell us about your experience working with Omkar Consultancy..."></textarea>
          </div>

          <div className="feedback5-group">
            <label>How can we improve? (Optional)</label>

            <textarea placeholder="Share any suggestions for improvement..."></textarea>
          </div>
        </div>
      </section>

      <section className="submit-section">
        <div className="submit-container">
          <button className="submit-btn">Submit Feedback</button>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Feedback;
