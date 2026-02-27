
import "./Feedback1.css";
const Feedback=()=>{
    return(
        <div>
            <section className="feedback-section">
  <div className="feedback-container">

    <div className="feedback-header">
      <div className="feedback-icon">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <path d="M21 15a4 4 0 0 1-4 4H7l-4 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/>
        </svg>
      </div>

      <h2>Customer Feedback</h2>
    </div>

    <p className="feedback-text">
      Your feedback helps us improve our services and deliver better results.
      Please take a moment to share your experience with Omkar Consultancy.
    </p>

  </div>
</section>


<section className="customer-info-section">
  <div className="customer-container">

    <h3 className="customer-heading">Customer Information</h3>

    <div className="form-grid">

      <div className="form-group">
        <label>Full Name <span>*</span></label>
        <input type="text" placeholder="Enter your full name"/>
      </div>

      <div className="form-group">
        <label>Email Address <span>*</span></label>
        <input type="email" placeholder="your.email@example.com"/>
      </div>

      <div className="form-group">
        <label>Company Name</label>
        <input type="text" placeholder="Your company name"/>
      </div>

      <div className="form-group">
        <label>Service Used <span>*</span></label>
        <input type="text"/>
      </div>

    </div>

  </div>
</section>
        </div>
    )
}
export default Feedback;