import React, { useState, useEffect, useRef } from "react";
import emailjs from 'emailjs-com';
import { 
  FiSend, 
  FiCheckCircle, 
  FiUser,
  FiMail,
  FiPhone,
  FiHome,
  FiMapPin,
  FiBox,
  FiLayers,
  FiDatabase,
  FiGlobe,
  FiFileText,
  FiTruck,
  FiAnchor
} from "react-icons/fi";
import { motion } from "framer-motion";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    country_code: "+91",
    company: "",
    country: "",
    product: "",
    product_type: "",
    quantity: "",
    destination: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      const emailData = {
        ...formData,
        phone: `${formData.country_code} ${formData.phone}`
      };
      
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData,
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      
      setStatus("success");
      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        country_code: "+91",
        company: "",
        country: "",
        product: "",
        product_type: "",
        quantity: "",
        destination: "",
        message: "",
      });
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("error");
    }
  };

  const products = [
    { value: "Grains", label: "Grains & Cereals", icon: <FiBox /> },
    { value: "Spices", label: "Spices & Herbs", icon: <FiBox /> },
    { value: "Pulses", label: "Pulses & Legumes", icon: <FiBox /> },
    { value: "Oilseeds", label: "Oilseeds & Oils", icon: <FiBox /> },
    { value: "Fresh Produce", label: "Fresh Fruits & Vegetables", icon: <FiBox /> },
    { value: "Processed Foods", label: "Processed Food Products", icon: <FiBox /> },
    { value: "Others", label: "Other Agricultural Products", icon: <FiBox /> },
  ];

  const productTypes = [
    "Organic Certified",
    "Conventional",
    "Fair Trade",
    "Non-GMO",
    "Kosher/Halal Certified",
    "Bulk Commodity",
    "Retail Packaged",
    "Others"
  ];

  return (
    <motion.div 
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        background: "url('/golbalnet.jpg') no-repeat center center fixed",
        backgroundSize: "cover",
        backgroundBlendMode: "lighten"
      }}
    >
      <div className="contact-content-wrapper">
        <div className="contact-hero">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Premium Agricultural Products for Global Markets
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Partner with Globalcorexport for high-quality agricultural exports. 
            We source directly from farms and deliver to markets worldwide with 
            strict quality control and timely delivery.
          </motion.p>
        </div>

        {status === "success" ? (
          <motion.div 
            className="thank-you"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <FiCheckCircle className="success-icon" />
            <h2>Your Inquiry Has Been Received</h2>
            <p className="success-message">
              Thank you for contacting Globalcorexport. Your request is important to us.
            </p>
            <div className="next-steps">
              <h3>What Happens Next:</h3>
              <ul>
                <li>Our agricultural export specialist will review your requirements within 1 business day</li>
                <li>You'll receive product details, specifications, and pricing</li>
                <li>We'll provide samples if requested and discuss delivery schedules</li>
              </ul>
            </div>
            <p className="emergency-contact">
              For urgent inquiries, please call our export team at <br />
              <a href="tel:+917226994742">+91 7226994742</a>
            </p>
          </motion.div>
        ) : (
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="form-section">
              <h3 className="section-title">
                <span className="title-icon"><FiUser /></span> Contact Information
              </h3>
              
              <div className="form-group">
                <label>Full Name <span className="required">*</span></label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your full name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address <span className="required">*</span></label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="you@example.com"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number <span className="required">*</span></label>
                <div className="phone-input-container">
                  <div className="country-code-input">
                    <input
                      type="text"
                      name="country_code"
                      placeholder="Enter country code"
                      value={formData.country_code}
                      onChange={handleChange}
                      required
                      className="country-code-field"
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="phone-number-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your organization"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Country of Operation <span className="required">*</span></label>
                <input
                  type="text"
                  name="country"
                  placeholder="Your business location"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3 className="section-title">
                <span className="title-icon"><FiLayers /></span> Product Details
              </h3>

              <div className="form-group">
                <label>Product Interest <span className="required">*</span></label>
                <div className="select-wrapper">
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a product</option>
                    {products.map((product) => (
                      <option key={product.value} value={product.value}>
                        {product.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Product Type <span className="required">*</span></label>
                <div className="select-wrapper">
                  <select
                    name="product_type"
                    value={formData.product_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select product type</option>
                    {productTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Estimated Quantity Needed <span className="required">*</span></label>
                <div className="select-wrapper">
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select quantity range</option>
                    <option value="Sample Shipment (1-10kg)">Sample Shipment (1-10kg)</option>
                    <option value="Small Order (100kg - 1MT)">Small Order (100kg - 1MT)</option>
                    <option value="Medium Order (1MT - 10MT)">Medium Order (1MT - 10MT)</option>
                    <option value="Large Order (10MT - 100MT)">Large Order (10MT - 100MT)</option>
                    <option value="Bulk Order (100MT+)">Bulk Order (100MT+)</option>
                    <option value="Container Load (20FT/40FT)">Container Load (20FT/40FT)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Destination Market(s) <span className="required">*</span></label>
                <input
                  type="text"
                  name="destination"
                  placeholder="Country/Region/Port"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3 className="section-title">
                <span className="title-icon"><FiFileText /></span> Additional Information
              </h3>
              <div className="form-group">
                <label>Your Requirements <span className="required">*</span></label>
                <textarea
                  name="message"
                  placeholder="Let us know how we can assist you..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                />
              </div>
            </div>

            <div className="form-footer">
              <p className="disclaimer">
                Thank you for reaching out. By submitting this form, you consent to being contacted by our export specialists to assist with your request. 
                Your details are transmitted securely and are never stored or shared — your privacy and trust are our priority.
              </p>
              <motion.button 
                type="submit" 
                disabled={status === "sending"}
                whileHover={{ scale: isMobile ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="submit-button"
              >
                {status === "sending" ? (
                  <span className="button-loading">
                    <span className="spinner"></span> Processing...
                  </span>
                ) : (
                  <>
                    <FiSend className="button-icon" /> Submit Product Inquiry
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </div>
    </motion.div>
  );
};

export default Contact;