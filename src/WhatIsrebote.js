import React from 'react';
import './WhatIsrebote.css';

const WhatIsrebote = () => {
  return (
    <div className="what-is-rebote-section">
      <div className="what-is-rebote-container">
        <h2 className="what-is-rebote-title">What is rebote?</h2>
        <p className="what-is-rebote-description">
          rebote is your passport to moments of peace amidst the urban hustle. Discover and book unique spaces by the minute—rooftops with views, cozy corners, secret gardens—to pause, breathe, and reconnect. Whether you need a quick escape, a place to meditate, or simply a new perspective, rebote offers you that special spot, instantly.
        </p>
        <div className="what-is-rebote-highlights">
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

export default WhatIsrebote;
