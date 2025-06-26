import './App.css';

function App() {
  const imageUrl = "https://i.ibb.co/SwQF8smr/assets-task-01jyp74gvkf7vtdapm143gsw99-1750945157-img-0.webp";
  
  return (
    <div className="App">
      <div 
        className="App-container"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <div className="content">
          <h1 className="title">Own the moment</h1>
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
            <div className="step-icon">📍</div>
            <h3 className="step-title">Find a nearby spot</h3>
            <p className="step-description">Open the map and choose where to breathe.</p>
          </div>
          
          <div className="step">
            <div className="step-icon">⚡</div>
            <h3 className="step-title">Book it instantly</h3>
            <p className="step-description">15 to 60 minutes, no hassle.</p>
          </div>
          
          <div className="step">
            <div className="step-icon">✨</div>
            <h3 className="step-title">Enjoy the moment</h3>
            <p className="step-description">Balconies, sofas, rooftops, hidden gardens…</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;