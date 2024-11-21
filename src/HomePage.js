const News = () => (
    <section className="news">
      <div className="container">
        <div className="news-content">
          <div className="news-text">
            <h1>Revolutionizing Research Through Interdisciplinary Collaboration</h1>
            <p>The Pranav Institute announces groundbreaking initiatives that bridge multiple scientific disciplines, fostering innovation and discovery in unprecedented ways.</p>
            <p>Our latest research combines artificial intelligence, quantum computing, and biological sciences to tackle some of humanity's most pressing challenges.</p>
            <a href="#" className="read-more">Learn More</a>
          </div>
          <div className="news-image">
            <img src="/api/placeholder/600/400" alt="Research Collaboration" />
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
              title: "AI in Healthcare: Breaking New Ground",
              description: "Exploring how artificial intelligence is transforming medical diagnosis and treatment.",
              image: "/api/placeholder/400/200"
            },
            {
              id: 2,
              title: "Climate Change: A Data-Driven Approach",
              description: "Using advanced analytics to understand and combat climate change.",
              image: "/api/placeholder/400/200"
            },
            {
              id: 3,
              title: "Quantum Computing Breakthrough",
              description: "New developments in quantum computing promise revolutionary advances.",
              image: "/api/placeholder/400/200"
            },
            {
              id: 4,
              title: "The Future of Renewable Energy",
              description: "Innovative solutions for sustainable energy production and storage.",
              image: "/api/placeholder/400/200"
            },
            {
              id: 5,
              title: "Neuroscience and Machine Learning",
              description: "Bridging the gap between human cognition and artificial intelligence.",
              image: "/api/placeholder/400/200"
            },
            {
              id: 6,
              title: "Sustainable Urban Development",
              description: "Smart cities and the future of urban planning.",
              image: "/api/placeholder/400/200"
            },
            {
              id: 7,
              title: "Biotechnology Innovations",
              description: "Latest advances in genetic engineering and synthetic biology.",
              image: "/api/placeholder/400/200"
            },
            {
              id: 8,
              title: "Space Exploration Technologies",
              description: "New frontiers in space research and exploration.",
              image: "/api/placeholder/400/200"
            },
            {
              id: 9,
              title: "Cybersecurity in the Digital Age",
              description: "Protecting digital infrastructure through innovative research.",
              image: "/api/placeholder/400/200"
            }
          ].map((item) => (
            <div key={item.id} className="analysis-card">
              <img src={item.image} alt={item.title} />
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#" className="read-more">Read More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
    
  const HomePage = () => (
    <>
      <News />
      <LatestAnalysis />
    </>
  );
  
  export default HomePage;