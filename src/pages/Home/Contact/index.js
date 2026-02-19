import { useState } from "react";
import"./Contact.css";
const ContactForm = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    company: "",
    iso: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // validation
  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (formData.mobile.length < 10) {
      newErrors.mobile = "Enter valid mobile number";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.iso) {
      newErrors.iso = "Please select ISO standard";
    }

    return newErrors;
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Submitted:", formData);
    }
  };

  return (
    <section className="contact">
      <div className="form-container">

        <div className="header">
          Request a Free Consultation
        </div>

        <form className="form-body" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && <small>{errors.fullName}</small>}
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small>{errors.email}</small>}
          </div>

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="number"
              name="mobile"
              placeholder="+91 XXXXX XXXXX"
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <small>{errors.mobile}</small>}
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              name="company"
              placeholder="Your company name"
              value={formData.company}
              onChange={handleChange}
            />
            {errors.company && <small>{errors.company}</small>}
          </div>

          <div className="form-group">
            <label>ISO Standard</label>
            <select
              name="iso"
              value={formData.iso}
              onChange={handleChange}
            >
              <option value="" disabled>Select ISO Standard</option>
              <option value="ISO 9001">ISO 9001</option>
              <option value="ISO 14001">ISO 14001</option>
              <option value="ISO 45001">ISO 45001</option>
            </select>
            {errors.iso && <small>{errors.iso}</small>}
          </div>

          <div className="form-group">
            <label>Message (Optional)</label>
            <input
              type="text"
              name="message"
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn-contact">
            Submit
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;
