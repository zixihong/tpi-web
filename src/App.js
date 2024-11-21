import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AboutPage, ResearchPage, MembershipPage, PeoplePage } from './Pages';
import { 
  CareersPage, 
  PrivacyPolicyPage, 
  CookieSettingsPage, 
  ContactPage, 
  TermsPage 
} from './FooterPages';
import ResearchPaper from './ResearchPaper1';
import './App.css';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};
const Header = () => (
  <header className="header">
    <div className="container">
      <Link to="/">
        <img src="/logos/TPI.png" alt="TPI Logo" className="logo" />
      </Link>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About TPI</Link>
        <Link to="/research" className="nav-link">Research</Link>
        <Link to="/people" className="nav-link">People</Link>
        <Link to="/membership" className="nav-link">Membership</Link>
      </nav>
      <div className="header-actions">
      <button 
  className="support-button" 
  onClick={() => window.open('https://forms.gle/QRW4CkdNUgGjf6LN7', '_blank')}
>
  Early Registration
</button>
      </div>
    </div>
  </header>
);

const News = () => (
  <section className="news">
    <div className="container">
      <div className="news-content">
        <div className="news-text">
        <h1>From Maritime Security to Trade Wars to Election Analysis...</h1>
         <p><b>The Pranav Institute is an up-and-coming think tank</b> dedicated to unpacking complex geopolitical challenges through research and analysis. As we approach December 2024, our research team is hard at work drafting up our latest reports.</p>
         <p>In the meantime, feel free to check out our latest coverages, explore our research areas, or take a second to understand our mission statement.</p>
          <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
            <Link to="/about" className="read-more">About Us</Link>
            <Link to="/research" className="read-more">Our Research</Link>
          </div>
        </div>
        <div className="news-image">
          <img src="/paper_pics/chinaarmy.jpg" alt="The Pranav Institute" height = '250px' />
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
        {[
          {
            id: 1,
            title: "United States vs. China: Trade Wars & Power Politics on the Global Stage",
            description: "What will the next Trump presidency look like economically?",
            image: "/paper_pics/tradewar.jpg",
            type: "research-paper",
            date: "November 2024",
            paperId: "trade-war-nov2024"
          },
          {
            id: 2,
            title: "U.S. Military Involvement in the South China Sea: A Policy Perspective",
            description: "The geopolitics of the South China Sea.",
            image: "/paper_pics/scs-2023.jpg",
            type: "research-paper",
            date: "March 2023",
            paperId: "scs-2023"
          }
        ].map((item) => (
          <Link 
            key={item.id} 
            to={item.type === 'research-paper' ? `/research/${item.paperId}` : item.externalLink}
            className="analysis-card"
            style={{ 
              textDecoration: 'none',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              color: 'inherit'
            }}
            onClick={scrollToTop}
          >
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.date}</p>
            </div>
          </Link>
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
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cookie-settings">Cookie Settings</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <p>&copy; 2024 The Pranav Institute</p>
          <Link to="/">
            <img 
              src='/logos/The Pranav Institute.png' 
              alt='TPI Logo Longer' 
              className='footer-logo'
              height={45}
            />
          </Link>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/the-pranav-institute/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const HomePage = () => (
  <>
    <News />
    <LatestAnalysis />
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/people" element={<PeoplePage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/cookie-settings" element={<CookieSettingsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/research/:paperId" element={<ResearchPaper />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;