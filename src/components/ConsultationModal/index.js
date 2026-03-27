import "./ConsultationModal.css";
import { useState } from "react";

const ConsultationModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://sirsonite.in/sirsonite-d/omkaradmin/api/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();

      if (result.status === true || result.success === true) {
        alert("Enquiry submitted successfully ✅");

        setFormData({
          full_name: "",
          company_name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });

        onClose();
      } else {
        alert("Something went wrong ❌");
      }
    } catch (error) {
      console.log(error);
      alert("API Error ❌");
    } finally {
      setLoading(false);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>
                  Full Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  placeholder="John Doe"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Company Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="company_name"
                  placeholder="Your Company"
                  value={formData.company_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Email Address <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  Phone Number <span>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label style={{ display: "block", paddingTop: "15px" }}>
                Service / Training <span>*</span>
              </label>
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label style={{ display: "block", paddingTop: "15px" }}>
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your requirements..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="consult-footer">
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "Submitting..." : "Submit Enquiry"}
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
