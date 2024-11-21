import React from 'react';
import { useParams } from 'react-router-dom';

const papers = {
  "trade-war-nov2024": {
    title: "United States vs. China: Trade Wars & Power Politics on the Global Stage",
    author: "Jack Beery",
    date: "November 2024",
    abstract: "The world of trade between large countries is a balancing act of comparative advantage and specialization, with each country bargaining and forming relationships with other states in order to bolster their economy and enjoy the benefits of other countries' specialization. We find that as trade becomes more strained between the United States and China because of its troubled history and its continued conflict politically, economically, and socially, the U.S. must take action to increase cooperative action with China to achieve combined goals, or else move manufacturing and jobs to the United States or grow trade relations and manufacturing relationships with other large manufacturing countries across the world. However, that industry moving domestically can dramatically impact the U.S' ability to keep goods and services cheap for its citizens because of the lowered amount of international trade and specialization. With Trump being elected in 2024, many are wondering what the impacts of his policies will be–both the ones we have already seen in 2016, and the ones that will be new to his agenda. We find that a continuation of Trump's isolationist economic policies and sparring with China create an even worse base for consumer cost of living in the United States. The report analyzes key literature around the topic in order to incite discussion and argumentation among researchers to really find what the next Trump presidency will look like.",
    pdfPath: "/papers/tradewar.pdf"
  },
  "scs-2023": {
    title: "U.S. Military Involvement in the South China Sea: A Policy Perspective",
    author: "Jack Beery",
    date: "March 2023",
    abstract: "This analysis examines the complex dynamics of U.S. military presence and strategic interests in the South China Sea region. As China continues to assert territorial claims and expand its military capabilities in these contested waters, the United States faces critical decisions about its role in maintaining regional stability and protecting international maritime law. The paper evaluates current U.S. military policy, including freedom of navigation operations, military partnerships with regional allies, and strategic deterrence measures. Through examination of recent developments and historical context, we explore how U.S. military involvement affects regional security architecture, international trade routes, and great power competition. Our findings suggest that targeted military presence, combined with diplomatic engagement and strengthened regional partnerships, offers the most effective approach to maintaining stability while avoiding unintended escalation. The analysis concludes with policy recommendations for balancing assertive deterrence with diplomatic flexibility in this strategically vital region.",
    pdfPath: "/papers/scs-2023.pdf"
  }
};

function ResearchPaper() {
  const { paperId } = useParams();
  const paper = papers[paperId];

  if (!paper) {
    return (
      <div className="container" style={{ padding: '60px 0' }}>
        <h1>Paper Not Found</h1>
      </div>
    );
  }

  const handleDownloadPDF = () => {
    window.open(paper.pdfPath, '_blank');
  };

  return (
    <div className="container" style={{ padding: '60px 0' }}>
      <article className="research-paper">
        <header style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{paper.title}</h1>
          <div style={{ color: 'var(--text-color)', opacity: 0.8 }}>
            <p>By {paper.author}</p>
            <p>{paper.date}</p>
          </div>
        </header>

        <div className="paper-abstract" style={{ 
          background: 'rgba(30, 30, 30, 0.95)',
          padding: '2rem',
          borderRadius: '8px',
          marginBottom: '2rem'
        }}>
          <h2>Abstract</h2>
          <p>{paper.abstract}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={handleDownloadPDF}
            className="support-button"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Read Full Paper
          </button>
        </div>
      </article>
    </div>
  );
}

export default ResearchPaper;