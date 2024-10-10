import React from 'react';
import './App.css';

const Header = () => (
  <header className="header">
    <div className="container">
      <img src="/api/placeholder/150/50" alt="TPI Logo" className="logo" />
      <nav className="nav">
        <a href="#" className="nav-link">About TPI</a>
        <a href="#" className="nav-link">Research</a>
        <a href="#" className="nav-link">Events</a>
        <a href="#" className="nav-link">Programs</a>
        <a href="#" className="nav-link">Membership</a>
      </nav>
      <div className="header-actions">
        <button className="support-button">Support TPI</button>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon search-icon" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon menu-icon" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </div>
  </header>
);

const News = () => (
  <section className="news">
    <div className="container">
      <div className="news-content">
        <div className="news-text">
          <h1>X</h1>
          <p></p>
          <a href="#" className="read-more">Read More</a>
        </div>
        <div className="news-image">
          <img src="/api/placeholder/400/300" alt="Featured" />
        </div>
      </div>
    </div>
  </section>
);

const LatestAnalysis = () => (
  <section className="latest-analysis">
    <div className="container">
      <h2>Latest Analysis</h2>
      <div className="analysis-grid">
        {[1, 2, 3].map((item) => (
          <div key={item} className="analysis-card">
            <img src={`/api/placeholder/400/200`} alt="whatever" />
            <div className="card-content">
              <h3> {item}</h3>
              <p></p>
              <a href="#" className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>About TPI</h3>
          <ul>
            <li><a href="#">Mission</a></li>
            <li><a href="#">x</a></li>
            <li><a href="#">x</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>x</h3>
          <ul>
            <li><a href="#">x</a></li>
            <li><a href="#">x</a></li>
            <li><a href="#">x</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>x</h3>
          <ul>
            <li><a href="#">x</a></li>
            <li><a href="#">x</a></li>
            <li><a href="#">x</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect with The Pranav Institute</h3>
          <div className="social-icons">
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const App = () => (
  <div className="app">
    <Header />
    <main>
      <News />
      <LatestAnalysis />
    </main>
    <Footer />
  </div>
);

export default App;