import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const imageUrl = "https://i.ibb.co/SwQF8smr/assets-task-01jyp74gvkf7vtdapm143gsw99-1750945157-img-0.webp";
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldScroll = scrollPosition > 150;
      
      // Debounce para suavizar la transición
      if (shouldScroll !== isScrolled) {
        setIsScrolled(shouldScroll);
      }
    };

    // Throttle scroll event para mejor performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [isScrolled]);
  
  return (
    <div className={`App ${isScrolled ? 'scrolled-mode' : ''}`}>
      <div 
        className={`App-container ${isScrolled ? 'scrolled' : ''}`}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <div className="content">
          <h1 className={`title ${isScrolled ? 'scrolled' : ''}`}>
            {isScrolled ? 'Bello' : 'Own the moment'}
          </h1>
          <div className={`button-container ${isScrolled ? 'scrolled' : ''}`}>
            <button className="btn btn-black">How it works?</button>
            <button className="btn btn-white">Discover now</button>
          </div>
        </div>
      </div>
      
      {/* Contenido adicional para poder hacer scroll */}
      <div className="additional-content">
        <div className="content-section">
          <h2>Discover Amazing Features</h2>
          <p>Experience the power of our innovative platform designed to help you capture and own every precious moment of your life.</p>
        </div>
        <div className="content-section">
          <h2>How It Works</h2>
          <p>Our intuitive interface makes it easy to get started. Simply sign up, explore our features, and begin your journey to owning every moment.</p>
        </div>
        <div className="content-section">
          <h2>Join Thousands of Users</h2>
          <p>Be part of a growing community that values capturing life's most important moments. Start your journey today.</p>
        </div>
      </div>
    </div>
  );
}

export default App;