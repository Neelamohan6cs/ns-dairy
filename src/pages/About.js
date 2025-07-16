import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Us 🐄</h2>

      {/* Owner Section */}
      <section className="owner-section">
        <h3>Meet Our Founder</h3>
        <p>
          Mr. Arul Neelamohan, a passionate farmer from Tamil Nadu, started this dairy journey with just two cows and a vision — to provide fresh, healthy, and pure milk directly from farm to home.
          With strong roots in agriculture and animal care, he believes in ethical farming and customer trust.
        </p>
      </section>

      {/* Company Info */}
      <section className="company-section">
        <h3>About Our Dairy</h3>
        <p>
          <strong>Sample Dairy Pvt Ltd</strong> was founded in 2024 with a mission to deliver fresh milk and high-quality cattle feeds across South India.
          We currently manage 50+ cows, maintain hygienic farm environments, and ensure chemical-free, natural milk processing.
        </p>
        <p>
          Our dairy not only supplies milk but also organic ghee, curd, butter, and high-quality **paruthi punnaku** cattle feed to farmers and households.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="trust-section">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>✅ 100% Natural & Fresh Products</li>
          <li>✅ Transparent Farm Practices</li>
          <li>✅ Direct-from-Farm Delivery</li>
          <li>✅ Trusted by 300+ Happy Customers</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
