import './App.css'

function App() {

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <h1>Taste of Italy</h1>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="main">
        <section id="home" className="hero">
        </section>

        <section className="cards-section">
          <div className="cards-container">
            <div className="card" id="card-one">
              <h3 id="card-title">PERFECT PASTA</h3>
            </div>
            <div className="card" id="card-two">
              <h3 id="card-title">HANDTOSSED PIZZA</h3>
            </div>
            <div className="card" id="card-three">
              <h3 id="card-title">AUTHENTIC DESSERTS</h3>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
