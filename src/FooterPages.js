import React from 'react';

const PageContainer = ({ children }) => (
  <section className="container" style={{ padding: '60px 0', minHeight: '80vh' }}>
    <div className="news-text">
      {children}
    </div>
  </section>
);

export const CareersPage = () => (
  <PageContainer>
    <h1>Careers at TPI</h1>
    <p style={{ marginBottom: '2rem' }}>Join our team of world-class researchers and writers.</p>
    
    <div className="analysis-grid">
      {[
        {
          title: "International Policy Writer",
          department: "International Relations & Policy",
          location: "Remote",
          type: "Intern",
          requirements: [
            "Currently pursuing Bachelor's/Master's in International Relations, Political Science, or related field",
            "Strong analytical and writing skills",
            "Knowledge of current global affairs",
            "Ability to work independently and meet deadlines"
          ]
        },
        {
          title: "Domestic Policy Writer",
          department: "U.S. Policy Analysis",
          location: "Remote",
          type: "Intern",
          requirements: [
            "Currently pursuing Bachelor's/Master's in Political Science, Public Policy, or related field",
            "Strong analytical and writing skills",
            "Understanding of U.S. political system and current events",
            "Ability to work independently and meet deadlines"
          ]
        }
      ].map((job, index) => (
        <div key={index} className="analysis-card">
          <div className="card-content">
            <h3>{job.title}</h3>
            <p><strong>Department:</strong> {job.department}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <div style={{ margin: '1rem 0' }}>
              <strong>Requirements:</strong>
              <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                {job.requirements.map((req, i) => (
                  <li key={i}>{req}</li>
                ))}
              </ul>
            </div>
            <a href="https://www.linkedin.com/company/the-pranav-institute/jobs/" className="read-more" target = "nonlooper">Apply Now</a>
          </div>
        </div>
      ))}
    </div>
  </PageContainer>
);

export const PrivacyPolicyPage = () => (
  <PageContainer>
    <h1>Privacy Policy</h1>
    <p style={{ marginBottom: '2rem' }}>Last updated: November 15, 2024</p>
    
    <div className="policy-content">
      <section style={{ marginBottom: '2rem' }}>
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, information we obtain from your use of our services, and information from third parties.</p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
          <li>Account Information</li>
          <li>Research Data</li>
          <li>Usage Information</li>
          <li>Communication Data</li>
        </ul>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect TPI and our users.</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>3. Data Sharing and Disclosure</h2>
        <p>We do not share personal information with companies, organizations, or individuals outside of TPI except in the following cases:</p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
          <li>With your consent</li>
          <li>For legal purposes</li>
          <li>With our service providers</li>
          <li>For research collaboration</li>
        </ul>
      </section>
    </div>
  </PageContainer>
);

export const CookieSettingsPage = () => (
  <PageContainer>
    <h1>Cookie Policy</h1>
    
    <h2>Introduction</h2>
    <p>This is the cookie policy for The Pranav Institute (collectively referred to as "TPI", "we", "us" or "our" in this policy) and our website pranavsinstitute.org ("our site"). For more information about how we may use personal data, please read our privacy policy.</p>

    <h2>What is a cookie?</h2>
    <p>A cookie is a small file containing letters and numbers that is downloaded to your device when you visit our website. It allows us to recognize and remember you when you return to our site.</p>

    <h2>Similar Technologies</h2>
    <p>Technologies that store or access information on your device similar to cookies are also covered by this policy. These may include:</p>
    <ul>
      <li>Device fingerprinting – using device information to create a unique identifier</li>
      <li>Local storage – storing data in your device's cache</li>
      <li>Pixels – small graphics used to track site usage</li>
      <li>Scripts – embedded programs that add functionality to our site</li>
    </ul>
    <p>For simplicity, we refer to all these technologies as "cookies" in this policy.</p>

    <h2>Types of Cookies</h2>
    <p>We use two main categories of cookies:</p>
    <ul>
      <li><b>First-party cookies</b> – cookies set by TPI when you use our site</li>
      <li><b>Third-party cookies</b> – cookies set by other organizations when you use our site</li>
    </ul>

    <h2>How We Use Cookies</h2>
    <p>We use cookies to:</p>
    <ul>
      <li>Keep you signed in</li>
      <li>Understand how you use our site</li>
      <li>Deliver relevant research content</li>
      <li>Show you TPI services that may interest you</li>
      <li>Process any transactions</li>
      <li>Monitor and improve site performance</li>
    </ul>

    <h2>Cookie Categories</h2>
    <div className="analysis-card" style={{ marginTop: '20px' }}>
      <div className="card-content">
        <h3>Strictly Necessary</h3>
        <p>Essential cookies that enable basic site functionality, such as keeping you logged in and saving your preferences. These cannot be disabled.</p>
      </div>
    </div>

    <div className="analysis-card" style={{ marginTop: '20px' }}>
      <div className="card-content">
        <h3>Performance</h3>
        <p>Cookies that help us understand how visitors interact with our site, allowing us to improve our content delivery and user experience. These track patterns like which research papers are most read and by what types of users.</p>
      </div>
    </div>
  </PageContainer>
);

export const ContactPage = () => (
  <PageContainer>
    <h1>Contact Us</h1>
    <p style={{ marginBottom: '2rem' }}>Get in touch with The Pranav Institute</p>
    
    <div className="analysis-grid">
      {[
        {
          title: "General Inquiries",
          contact: "Jack Beery (CEO)",
          email: "jackbeery11@gmail.com",
          phone: "972-922-7531",
        },
        {
          title: "Operations Inquiries",
          contact: "Pranav Battu (COO)",
          email: "operations@pranavsinstitute.org",
          phone: "972-971-1225",
        },
        {
          title: "Financial Inquiries",
          contact: "Manhua Kim (CFO)",
          email: "finance@pranavsinstitute.org",
          phone: "469-924-5727",
        },
        {
          title: "Technical Support",
          contact: "Bryan Hong (CTO)",
          email: "bzh.texas@gmail.com",
          phone: "214-566-7506",
        }
      ].map((contact, index) => (
        <div key={index} className="analysis-card">
          <div className="card-content">
            <h3>{contact.title}</h3>
            <p><strong>Contact:</strong> {contact.contact}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
          </div>
        </div>
      ))}
    </div>
  </PageContainer>
);

export const TermsPage = () => (
  <PageContainer>
    <h1>Terms of Service</h1>
    <p style={{ marginBottom: '2rem' }}>Last updated: November 15, 2024</p>
    
    <div className="terms-content">
      <section style={{ marginBottom: '2rem' }}>
        <h2>1. Terms</h2>
        <p>By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on The Pranav Institute's website for personal, non-commercial transitory viewing only.</p>
        <p style={{ marginTop: '1rem' }}>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
          <li>modify or copy the materials;</li>
          <li>use the materials for any commercial purpose;</li>
          <li>attempt to decompile or reverse engineer any software contained on the website;</li>
          <li>remove any copyright or other proprietary notations from the materials;</li>
        </ul>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>3. Disclaimer</h2>
        <p>The materials on TPI's website are provided on an 'as is' basis. TPI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
      </section>
    </div>
  </PageContainer>
);