import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <span className="hero-badge">Public Safety & Assistance</span>
          <h1 className="hero-title">Your Safety. Our Priority.</h1>
          <p className="hero-subtitle">
            A simple platform providing quick access to essential emergency and public safety information.
          </p>
          <Link to="/emergency" className="btn btn-primary">
            View Emergency Services &rarr;
          </Link>
        </div>
      </section>

      {/* Emergency Services Overview Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Emergency Services</h2>
            <p className="section-subtitle">
              Quick access to core public emergency response services.
            </p>
          </div>

          <div className="cards-grid">
            {/* Police Card */}
            <div className="card">
              <div className="card-header">
                <div className="card-icon police">🚓</div>
                <h3 className="card-title">Police</h3>
              </div>
              <p className="card-description">
                Get information about police emergency assistance.
              </p>
            </div>

            {/* Ambulance Card */}
            <div className="card">
              <div className="card-header">
                <div className="card-icon ambulance">🚑</div>
                <h3 className="card-title">Ambulance</h3>
              </div>
              <p className="card-description">
                Access emergency medical assistance information.
              </p>
            </div>

            {/* Fire Brigade Card */}
            <div className="card">
              <div className="card-header">
                <div className="card-icon fire">🚒</div>
                <h3 className="card-title">Fire Brigade</h3>
              </div>
              <p className="card-description">
                Get information for fire and rescue emergencies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What To Do In An Emergency Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What To Do In An Emergency</h2>
            <p className="section-subtitle">
              Important guidelines to follow when facing an urgent emergency situation.
            </p>
          </div>

          <div className="emergency-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <p className="step-text">Stay calm and assess the situation.</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <p className="step-text">Contact the appropriate emergency service.</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <p className="step-text">Clearly provide your location and situation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
