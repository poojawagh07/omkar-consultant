import "./ConsultationModal.css";
const ConsultationModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="consult-overlay">
      <div className="consult-modal-box">

        <div className="consult-header">
          <div>
            <h2>Get Free Consultation</h2>
            <p>Fill in your details and we'll get back to you shortly</p>
          </div>
          <button className="consult-close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="consult-body">
          <form>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name <span>*</span></label>
                <input type="text" placeholder="John Doe" />
              </div>

              <div className="form-group">
                <label>Company Name <span>*</span></label>
                <input type="text" placeholder="Your Company" />
              </div>

              <div className="form-group">
                <label>Email Address <span>*</span></label>
                <input type="email" placeholder="john@company.com" />
              </div>

              <div className="form-group">
                <label>Phone Number <span>*</span></label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="form-group full-width">
              <label>Service / Training <span>*</span></label>
              <input type="text" />
            </div>

            <div className="form-group full-width">
              <label>Message</label>
              <textarea placeholder="Tell us about your requirements..."></textarea>
            </div>

            <div className="consult-footer">
              <button type="submit" className="submit-btn">
                Submit Enquiry
              </button>
              <button type="button" className="cancel-btn" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ConsultationModal;