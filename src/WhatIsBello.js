import React from 'react';
import './WhatIsBello.css';

const WhatIsBello = () => {
  return (
    <div className="what-is-bello-section">
      <div className="what-is-bello-container">
        <h2 className="what-is-bello-title">What is Bello?</h2>
        <p className="what-is-bello-description">
          Bello is your passport to moments of peace amidst the urban hustle. Discover and book unique spaces by the minute—rooftops with views, cozy corners, secret gardens—to pause, breathe, and reconnect. Whether you need a quick escape, a place to meditate, or simply a new perspective, Bello offers you that special spot, instantly.
        </p>
        <div className="what-is-bello-highlights">
          <div className="highlight-item">
            <span role="img" aria-label="sparkles" className="highlight-icon">✨</span>
            <p>Instant access to private spaces</p>
          </div>
          <div className="highlight-item">
            <span role="img" aria-label="leaf" className="highlight-icon">🌿</span>
            <p>Moments to breathe and disconnect</p>
          </div>
          <div className="highlight-item">
            <span role="img" aria-label="clock" className="highlight-icon">⏱️</span>
            <p>Flexible bookings by the minute</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsBello;
