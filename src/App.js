import './App.css';

function App() {
  const imageUrl = "https://i.ibb.co/C3w5XRr9/bg-img.webp";
  
  return (
    <div className="App">
      <div 
        className="App-container"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      >
        <h1 className="title">Own the moment</h1>
      </div>
    </div>
  );
}

export default App;