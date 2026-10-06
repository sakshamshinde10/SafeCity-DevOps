import React from 'react';
import { Link } from 'react-router-dom';

function Emergency() {
  return (
    <div className="emergency-page section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <h1 className="section-title">Emergency Services</h1>
          <p className="section-subtitle">
            Quick access to important emergency service information.
          </p>
        </div>

        {/* 4 Emergency Cards */}
        <div className="cards-grid-4">
          {/* Police Card */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon police">🚓</div>
              <h2 className="card-title">Police</h2>
            </div>
            <p className="card-description">
              Contact police services for immediate safety and law-enforcement assistance.
            </p>
            <div className="contact-badge">
              <span className="contact-label">Emergency Contact</span>
              <span className="contact-number">100</span>
            </div>
            <span className="demo-note">* Demonstration value for college DevOps project</span>
          </div>

          {/* Ambulance Card */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon ambulance">🚑</div>
              <h2 className="card-title">Ambulance</h2>
            </div>
            <p className="card-description">
              Request emergency medical assistance.
            </p>
            <div className="contact-badge">
              <span className="contact-label">Emergency Contact</span>
              <span className="contact-number">108</span>
            </div>
            <span className="demo-note">* Demonstration value for college DevOps project</span>
          </div>

          {/* Fire Brigade Card */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon fire">🚒</div>
              <h2 className="card-title">Fire Brigade</h2>
            </div>
            <p className="card-description">
              Contact fire and rescue services.
            </p>
            <div className="contact-badge">
              <span className="contact-label">Emergency Contact</span>
              <span className="contact-number">101</span>
            </div>
            <span className="demo-note">* Demonstration value for college DevOps project</span>
          </div>

          {/* Cyber Crime Card */}
          <div className="card">
            <div className="card-header">
              <div className="card-icon cyber">💻</div>
              <h2 className="card-title">Cyber Crime</h2>
            </div>
            <p className="card-description">
              Get information about reporting cyber-related incidents.
            </p>
            <div className="contact-badge">
              <span className="contact-label">Cyber Crime Helpline</span>
              <span className="contact-number">1930</span>
            </div>
            <span className="demo-note">* Demonstration value for college DevOps project</span>
          </div>
        </div>

        {/* Warning / Information Box */}
        <div className="warning-box">
          <div className="warning-icon">⚠️</div>
          <div className="warning-content">
            <strong>Important:</strong> This SafeCity website is a college demonstration project and is not an official emergency service.
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="page-actions">
          <Link to="/" className="btn btn-secondary">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Emergency;
