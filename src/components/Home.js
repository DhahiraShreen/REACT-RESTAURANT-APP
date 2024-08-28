import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <img src="/images/home.jpg" alt="Restaurant" className="home-img"/>
      <div className="text-overlay">
        <h1>Welcome to Our Restaurant</h1>
        <p>We serve the best food in town, made with fresh ingredients and love. Our restaurant offers a cozy atmosphere, perfect for dining with family and friends.</p>
      </div>
    </div>
  );
}

export default Home;
