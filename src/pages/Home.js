import React from 'react';
import '../styles/Home.css';
import homeBanner from '../images/home.jpeg';

import Products from './Products';
import About from './About';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="home-container">
      {/* Fullscreen banner */}
      <div className="home-banner">
        <img src={homeBanner} alt="Dairy Farm" />
        <div className="banner-text">
          <h1>Welcome to Dairy 🐄</h1>
          <p>Fresh Milk • Pure Products • Trusted by Families</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="home-info">
        <p>
          At Dairy Pvt Ltd, we believe in purity, tradition, and quality. Our cows are raised in a healthy, green environment and are fed with organic cattle feed like <strong>Paruthi Punnaku</strong>.
        </p>
        <p>
          From farm to home, we ensure that every drop of milk you receive is natural, chemical-free, and nutritious. We also produce fresh ghee, curd, and butter using traditional methods.
        </p>
        <p>
          Join 300+ families who trust us for daily milk and dairy needs across Tamil Nadu.
        </p>
      </div>

      {/* Include Other Sections */}
      <Products />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
