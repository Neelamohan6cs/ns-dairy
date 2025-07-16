import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>📍 Our Location</h2>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.3569154196374!2d77.6046!3d10.1539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b074a0c547f2c8b%3A0x50c53f2ec13f40e3!2sSample%20Dairy%20Farm!5e0!3m2!1sen!2sin!4v1658765432109!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Address */}
      <div className="contact-details">
        <h3>🧭 Address</h3>
        <p>Sample Dairy Pvt Ltd,<br />
        123 Cow Street,<br />
        Madurai, Tamil Nadu - 625001<br />
        📞 +91 98765 43210</p>

        {/* Social Links */}
        <h3>📱 Connect with us</h3>
        <ul className="social-links">
          <li>Instagram: <a href="https://instagram.com/sampledairy" target="_blank" rel="noreferrer">@sampledairy</a></li>
          <li>Facebook: <a href="https://facebook.com/sampledairy" target="_blank" rel="noreferrer">facebook.com/sampledairy</a></li>
          <li>WhatsApp: <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">Chat Now</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
