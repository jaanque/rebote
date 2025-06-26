import { useState } from 'react';
import './App.css';

function App() {
  const imageUrl = "https://i.ibb.co/SwQF8smr/assets-task-01jyp74gvkf7vtdapm143gsw99-1750945157-img-0.webp";
  
  const moments = [
    {
      text: "20 minutes before my meeting.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&crop=center"
    },
    {
      text: "A quiet rooftop to call home.",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=600&h=400&fit=crop&crop=center"
    },
    {
      text: "Just me, a hammock, and the sun.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center"
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
          <p className="subtitle">Find places to pause, breathe, and take in the view—instantly.</p>
          <div className="button-container">
            <button className="btn btn-black">How it works?</button>
            <button className="btn btn-white">Discover now</button>
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
              <span className="space-emoji">🪟</span>
              <span className="space-text">Porches</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="host-section">
        <div className="host-container">
          <div className="host-content">
            <span className="host-emoji">🙋‍♂️</span>
            <h2 className="host-title">Have a place someone could use?</h2>
            <p className="host-description">Even 15 minutes can change someone's day.</p>
            <p className="host-subtitle">Earn by sharing your unused space—on your schedule.</p>
            <button className="btn host-btn">Host your space</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;