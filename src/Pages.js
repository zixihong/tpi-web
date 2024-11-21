import React from 'react';

export const AboutPage = () => {
  return (
    <section className="container" style={{ padding: '60px 0' }}>
      <div className="news-text">
        <h1>About The Pranav Institute</h1>
        <p>The Pranav Institute (TPI) is a pioneering independent, nonpartisan organization that stands at the intersection of cutting-edge research and international relations. As a forward-thinking think tank and publisher, we are dedicated to fostering innovation and academic excellence while bridging the gap between theoretical research and real-world policy implementation. Our core mission extends beyond traditional academic boundaries, seeking to advance knowledge across multiple disciplines with a particular emphasis on global affairs and emerging technologies. Through our commitment to research excellence, we tackle complex international challenges by combining rigorous academic analysis with practical policy solutions. The institute's collaborative approach brings together diverse perspectives and expertise, fostering partnerships across borders and disciplines. Our work is guided by unwavering principles of integrity and ethical conduct, ensuring that our research and policy recommendations maintain the highest standards of academic rigor and impartiality. As we navigate an increasingly interconnected world, TPI remains committed to making a lasting global impact by promoting evidence-based solutions to contemporary challenges in international relations, technological advancement, and policy development. Whether through our published research, policy briefs, or collaborative initiatives, we strive to be a catalyst for positive change in the global academic and policy landscapes.</p>
      </div>
    </section>
  );
};

export const ResearchPage = () => {
  return (
    <section className="container" style={{ padding: '60px 0' }}>
      <div className="news-text">
        <h1>Research at TPI</h1>
        <p>Our research focuses on critical areas of international relations, policy analysis, and global affairs.</p>
        
        <div className="analysis-grid" style={{ marginTop: '40px' }}>
          <div className="analysis-card">
            <img src="/paper_pics/trade.jpg" alt="International Trade" />
            <div className="card-content">
              <h3>International Trade & Economics</h3>
              <p>Analysis of global trade dynamics, economic policies, and U.S.-China relations.</p>
            </div>
          </div>
          
          <div className="analysis-card">
            <img src="/paper_pics/martime.jpg" alt="Security Studies" />
            <div className="card-content">
              <h3>Maritime Security & Defense</h3>
              <p>Examining military strategy, regional security, and geopolitical tensions in key maritime zones.</p>
            </div>
          </div>
          
          <div className="analysis-card">
            <img src="/paper_pics/vote.jpg" alt="Policy Analysis" />
            <div className="card-content">
              <h3>Policy Analysis & Elections</h3>
              <p>Coverage of U.S. elections, policy development, and their global implications.</p>
            </div>
            </div>

            <div className="analysis-card">
            <div className="card-content">
              <h3>And more...</h3>
              <p>Our research topics will continue to grow along with our team.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
 };

export const PeoplePage = () => {
  return (
    <section className="container" style={{ padding: '60px 0' }}>
      <div className="news-text">
        <h1>Our People</h1>
        <p>The people that make this possible</p>
        <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div className="analysis-card" style={{ width: '100%' }}>
            <div className="card-content" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '40px',
              padding: '30px'
            }}>
              <div style={{ flexShrink: 0 }}>
                <img 
                  src="/pfp/pfpjb.jpeg" 
                  alt="Jack Beery" 
                  style={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    boxShadow: '0 10px 20px rgba(0, 153, 204, 0.2)'
                  }}
                />
              </div>
              <div>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>CEO</h3>
                <p className="text-xl font-bold" style={{ marginBottom: '20px' }}><b>Jack Beery</b></p>
                <p style={{ 
                  lineHeight: '1.6',
                  color: 'var(--text-color)'
                }}>
                  Located between the Dallas-Fort Worth Metroplex, Washington D.C, and the Monterey Bay region, 
                  I have lived and constantly travel across the nation. Passionate about communication and my own 
                  continuous personal development, strong speaking allows me to truly express thoughts and ideas 
                  effectively. Being outgoing and charismatic compliments my interpersonal skills that enable me 
                  to work with others in a high stress and fast-paced working environment.
                </p>
              </div>
            </div>
          </div>

          <div className="analysis-card" style={{ width: '100%' }}>
            <div className="card-content" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '40px',
              padding: '30px'
            }}>
              <div style={{ flexShrink: 0 }}>
                <img 
                  src="/pfp/pfpmk.jpeg" 
                  alt="Manhua Kim" 
                  style={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    boxShadow: '0 10px 20px rgba(0, 153, 204, 0.2)'
                  }}
                />
              </div>
              <div>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>CFO</h3>
                <p className="text-xl font-bold" style={{ marginBottom: '20px' }}><b>Manhua Kim</b></p>
                <p style={{ 
                  lineHeight: '1.6',
                  color: 'var(--text-color)'
                }}>
                  Hello, my name is Manhua Kim and I'm an incoming freshman at UCLA pursuing a degree in Business Economics. Growing up witnessing the dynamic intersections of business and economics, I developed a deep fascination with how financial decisions shape our world. I am passionate about my education and look forward to applying the knowledge I gain to create meaningful real-world solutions. My analytical mindset and keen interest in market dynamics drive me to explore innovative approaches to business challenges. Beyond the classroom, I am eager to engage with the vibrant UCLA community and participate in opportunities that will enhance my understanding of global markets and financial systems.
                </p>
              </div>
            </div>
          </div>

          <div className="analysis-card" style={{ width: '100%' }}>
            <div className="card-content" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '40px',
              padding: '30px'
            }}>
              <div style={{ flexShrink: 0 }}>
                <img 
                  src="/pfp/pfppb.jpeg" 
                  alt="Pranav Battu" 
                  style={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    boxShadow: '0 10px 20px rgba(0, 153, 204, 0.2)'
                  }}
                />
              </div>
              <div>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>COO</h3>
                <p className="text-xl font-bold" style={{ marginBottom: '20px' }}><b>Pranav Battu</b></p>
                <p style={{ 
                  lineHeight: '1.6',
                  color: 'var(--text-color)'
                }}>
                  As Chief Policy Strategist at The Pranav Institute while pursuing my studies at Washington University in St. Louis, I bring a unique perspective to policy analysis and strategic planning. My interdisciplinary background enables me to approach complex challenges with innovative solutions, combining academic insights with practical applications. I am passionate about developing comprehensive policy frameworks and building collaborative relationships across sectors. Through my role at the institute, I work to bridge the gap between theoretical research and real-world policy implementation, always seeking new ways to drive meaningful change.
                </p>
              </div>
            </div>
          </div>

          <div className="analysis-card" style={{ width: '100%' }}>
            <div className="card-content" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '40px',
              padding: '30px'
            }}>
              <div style={{ flexShrink: 0 }}>
                <img 
                  src="/pfp/pfpbh.jpeg" 
                  alt="Bryan Hong" 
                  style={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    boxShadow: '0 10px 20px rgba(0, 153, 204, 0.2)'
                  }}
                />
              </div>
              <div>
                <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>CTO</h3>
                <p className="text-xl font-bold" style={{ marginBottom: '20px' }}><b>Bryan Hong</b></p>
                <p style={{ 
                  lineHeight: '1.6',
                  color: 'var(--text-color)'
                }}>
                  Howdy! I'm Bryan. I am currently a student at the University of California - Santa Barbara on scholarship. My diverse experiences in urban planning, bioinformatics, and public health reflect my curiosity and creativity in seeking unique solutions to complex challenges. At the intersection of these fields lies my passion for Machine Learning, Deep Learning, Computer Vision, and Data Analysis. I thrive on tackling difficult problems and love the process of exploring innovative approaches to achieve impactful results. Feel free to check out some of my personal and research projects in the link in my bio!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MembershipPage = () => {
  return (
    <section className="container" style={{ padding: '60px 0' }}>
      <div className="news-text">
        <h1>TPI Membership</h1>
        <p>Check in later! No memberships for sale yet!</p>
        
        {/* <div className="analysis-grid" style={{ marginTop: '40px' }}>
          <div className="analysis-card">
            <div className="card-content">
              <h3>Individual Membership</h3>
              <p>Access to research resources, events, and networking opportunities.</p>
              <ul style={{ marginBottom: '20px', marginLeft: '20px' }}>
                <li>Digital library access</li>
                <li>Quarterly newsletter</li>
                <li>Event discounts</li>
                <li>Network access</li>
              </ul>
              <a href="#" className="read-more">Join Now</a>
            </div>
          </div>
          
          <div className="analysis-card">
            <div className="card-content">
              <h3>Institutional Membership</h3>
              <p>Comprehensive benefits for organizations and institutions.</p>
              <ul style={{ marginBottom: '20px', marginLeft: '20px' }}>
                <li>Multiple user accounts</li>
                <li>Research collaboration</li>
                <li>Priority event access</li>
                <li>Custom programs</li>
              </ul>
              <a href="#" className="read-more">Learn More</a>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};