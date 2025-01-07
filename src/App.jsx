import './App.css'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <img
          className="logo"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google logo"
        />
        <input className="search-bar" type="search" />
        <div className="buttons">
          <button>Google Search</button>
          <button>Feeling Lucky</button>
        </div>
      </main>
      <footer>
        <p className="country">United Kingdom</p>
      </footer>
    </div>
  )
}

export default App;
