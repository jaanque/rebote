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
    </div>
  );
}

export default App;