import './App.css';

function CurrencyList() {
  return(
    <div className="dropdown">
      <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Choose cryptocurrency
      </a>
      <ul class="dropdown-menu">
        <li><a className="dropdown-item" href="#">Bitcoin 1</a></li>
        <li><a className="dropdown-item" href="#">Bitcoin 2</a></li>
        <li><a className="dropdown-item" href="#">Bitcoin 3</a></li>
        <li><a className="dropdown-item" href="#">Bitcoin 4</a></li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Cryptocurrency list</h1>
      <CurrencyList />
    </div>
  );
}

export default App;
