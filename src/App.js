import { useState } from 'react';
import './App.css';
import './2-App.css';

function App() {
  const imageUrl = "https://i.ibb.co/SwQF8smr/assets-task-01jyp74gvkf7vtdapm143gsw99-1750945157-img-0.webp";
  
  const moments = [
    {
      text: "Where I used to sit in silence.",
      image: "https://i.ibb.co/KjjdCJXp/assets-task-01jypn5e1af4h97a6kpe959qgc-1750959691-img-0.webp"
    },
    {
      text: "A pool a few floors above the city.",
      image: "https://i.ibb.co/Z1Kts785/assets-task-01jyq5dxy6etqaajzvd6tpz0fq-1750976725-img-0.webp"
    },
    {
      text: "Escape from the routine.",
      image: "https://i.ibb.co/TxWb1H6f/assets-task-01jyppd6f7egrbfffppdwg9ezd-1750960992-img-1.webp"
    }
  ];
  
  const [selectedMoment, setSelectedMoment] = useState(0);
  
  return (
    <div className="App">
      <div 
        className="App-container"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <div className="logo-container">
          <img 
            src="https://i.ibb.co/5h0gxHqT/Dise-o-sin-t-tulo-2-removebg-preview.png" 
            alt="Bello Logo" 
            className="logo"
          />
          <span className="logo-text">bello</span>
        </div>
        <div className="content">
          <h1 className="title">Own the moment</h1>
          <p className="subtitle">Find places to pause, breathe, and take in the view — instantly.</p>
          <div className="button-container">
            <button className="btn btn-black">Host a space</button>
            <button className="btn btn-white">Find a space</button>
          </div>
        </div>
      </div>
      
      <div className="how-it-works-section">
        <h2 className="how-it-works-title">How Bello works</h2>
        <p className="how-it-works-subtitle">It only takes a moment.</p>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="step-title">Find a nearby spot</h3>
            <p className="step-description">Open the map and choose where to breathe.</p>
          </div>
          
          <div className="step">
            <div className="step-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <h3 className="step-title">Book it instantly</h3>
            <p className="step-description">15 to 60 minutes, no hassle.</p>
          </div>
          
          <div className="step">
            <div className="step-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <h3 className="step-title">Enjoy the moment</h3>
            <p className="step-description">Balconies, sofas, rooftops, hidden gardens…</p>
          </div>
        </div>
      </div>
      
      <div className="moments-section">
        <div className="moments-container">
          <div className="moments-image">
            <img 
              src={moments[selectedMoment].image}
              alt="Moments Made for Bello" 
              className="moments-img"
            />
          </div>
          <div className="moments-content">
            <h2 className="moments-title"><strong>Moments Made for Bello</strong></h2>
            <ul className="moments-list">
              {moments.map((moment, index) => (
                <li 
                  key={index}
                  className={`moment-item ${selectedMoment === index ? 'active' : ''}`}
                  onClick={() => setSelectedMoment(index)}
                >
                  "{moment.text}"
                </li>
              ))}
            </ul>
            <p className="moments-subtitle"><strong>Whatever the moment, there's a space for it.</strong></p>
          </div>
        </div>
      </div>
      
      <div className="spaces-section">
        <div className="spaces-container">
          <h2 className="spaces-title">Spaces You'll Love</h2>
          <p className="spaces-subtitle">Browse real places shared by hosts across the city:</p>
          
          <div className="spaces-grid">
            <div className="space-item">
              <span className="space-emoji">🌿</span>
              <span className="space-text">Balconies with plants</span>
            </div>
            <div className="space-item">
              <span className="space-emoji">🌇</span>
              <span className="space-text">Rooftops with views</span>
            </div>
            <div className="space-item">
              <span className="space-emoji">🌼</span>
              <span className="space-text">Garden corners</span>
            </div>
            <div className="space-item">
              <span className="space-emoji">🛋️</span>
              <span className="space-text">Indoor chill spots</span>
            </div>
            <div className="space-item">
              <span className="space-emoji">📖</span>
              <span className="space-text">Reading nooks</span>
            </div>
            <div className="space-item">
              <span className="space-emoji">💤</span>
              <span className="space-text">Hammocks</span>
            </div>
            <div className="space-item">
              <span className="space-emoji">⛵</span>
              <span className="space-text">Boats</span>
            </div>
            <div className="space-item">
              <span className="space-emoji">🎨</span>
              <span className="space-text">Studios</span>
            </div>
            <div className="space-item">
              <span className="space-emoji">🎪</span>
              <span className="space-text">Porches</span>
            </div>
          </div>
        </div>
      </div>

      <div 
        className="host-section"
        style={{
          backgroundImage: `url(https://i.ibb.co/Fk8VzXc9/assets-task-01jyqb31jjfvyt17dws5zqdkdg-1750982686-img-0.webp)`
        }}
      >
        <div className="host-container">
          <h2 className="host-title">Host Your Space</h2>
          <p className="host-subtitle">Have a balcony, nook, or porch someone could use?</p>
          <p className="host-description">
            Let your space help someone reset. Earn for 15–60 minute bookings with full control and easy setup.
          </p>
          <button className="btn btn-white host-btn">Host your space</button>
        </div>
      </div>

      <div className="testimonials-section">
        <div className="testimonials-container">
          <h2 className="testimonials-title">Loved by Early Users</h2>
          <p className="testimonials-subtitle">Authentic feedback. Real urban peace.</p>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-card-content">
                <p className="testimonial-text">"Bello's rooftop saved my mental sanity."</p>
                <p className="testimonial-author">- Alex P.</p>
              </div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="star-icon"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card-content">
                <p className="testimonial-text">"A minute on that balcony changed my mood. Essential for city living!"</p>
                <p className="testimonial-author">- Maria K.</p>
              </div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="star-icon"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-card-content">
                <p className="testimonial-text">"Finally, a way to find quick escapes. Bello is a game changer."</p>
                <p className="testimonial-author">- Sam T.</p>
              </div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="star-icon"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                ))}
              </div>
            </div>
          </div>
          
          <div className="overall-rating-summary">
            <p className="overall-rating-text">
              <strong>Overall rating:ㅤ</strong> 
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="star-icon inline-star"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
              ㅤbased on 1000+ users
            </p>
          </div>
        </div>
      </div>

      <div className="why-bello-exists-section">
        <div className="why-bello-exists-container">
          <h2 className="why-bello-exists-title">Why Bello Whispers to the City</h2>
          <p className="why-bello-exists-intro">In the heart of the urban rush, amidst the symphony of a thousand lives lived at full speed, lies a yearning. A quiet call for a pause. A space to simply *be*.</p>
          <p className="why-bello-exists-mission">Bello was born from this yearning. We are the city's gentle exhale, a reminder that tranquility isn't a distant dream, but a nearby breath. Our mission is to weave moments of peace into the urban fabric, helping you find your center, even as the world spins on.</p>
          <div className="why-bello-exists-values-container">
            <div className="why-bello-exists-value-item">
              <span className="why-bello-exists-value-icon">🌸</span>
              <h3 className="why-bello-exists-value-title">Beauty in the Everyday</h3>
              <p className="why-bello-exists-value-text">We seek the quiet corners, the sunlit nooks, the unexpected vistas – proving that beauty is always within reach.</p>
            </div>
            <div className="why-bello-exists-value-item">
              <span className="why-bello-exists-value-icon">⏳</span>
              <h3 className="why-bello-exists-value-title">The Gift of Immediacy</h3>
              <p className="why-bello-exists-value-text">Your moment of calm shouldn't wait. Bello offers an instant escape, a readily available sanctuary.</p>
            </div>
            <div className="why-bello-exists-value-item">
              <span className="why-bello-exists-value-icon">🌿</span>
              <h3 className="why-bello-exists-value-title">Wellness, Woven In</h3>
              <p className="why-bello-exists-value-text">More than just a space, it's a chance to recharge, to find clarity, to nurture your inner well-being.</p>
            </div>
          </div>
          <p className="why-bello-exists-credo">Because peace isn’t a luxury for the weekend. It’s a necessity, just a few steps away. <br/>This is Bello. Your city, re-imagined.</p>
        </div>
      </div>
    </div>
    
  );
}

export default App;