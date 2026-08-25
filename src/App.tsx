import { useState, useEffect } from 'react';
// @ts-ignore
const payWithPaystack = (email) => {
  // @ts-ignore
  let handler = PaystackPop.setup({
    key: 'pk_test_2c4b5a2d0f4f5c8a7b9e1d3f5a7b9c1d3e5f7a9b',
    email: email,
    amount: 100000, // 1000 NGN
    currency: 'NGN',
    ref: '' + Math.floor(Math.random() * 1000000000 + 1),
    callback: function (response) {
      alert('Payment complete! Reference: ' + response.reference);
    },
    onClose: function () {
      alert('Window closed');
    },
  });
  handler.openIframe();
};
function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [filter, setFilter] = useState('All');
  const [sent, setSent] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const [clientEmail, setClientEmail] = useState('');

  useEffect(() => {
    if (activeTab === 'skills') {
      setAnimateSkills(false);
      const timer = setTimeout(() => setAnimateSkills(true), 100);
      return () => clearTimeout(timer);
    } else {
      setAnimateSkills(false);
    }
  }, [activeTab]);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  const data = {
    name: 'SUCCESS BROWNSON TECH',
    role: 'Fullstack Developer',
    location: 'Abia, Nigeria',
    email: 'successbrownson222@gmail.com',
    phone: '+234 912 596 9210',
    whatsapp:
      'https://wa.me/2349125969210?text=Hi%20Success%20I%20saw%20your%20portfolio%20and%20I%20need%20a%20website',
    paystackKey: 'pk_test_48465c9101ef5216a9d976b8ae4260493b45984c',
    github: 'https://github.com/successbrownson222-cloud',
    linkedin: 'https://www.linkedin.com/in/success-brownson-290292418',
    twitter: 'https://twitter.com/',
    resume:
      'https://drive.google.com/file/d/1IwSg3fYrlcwhFqMtDga3a_WzEifLDG4_/view?usp=drivesdk',
    photo: 'https://files.catbox.moe/b84keh.jpg',
    about:
      'Fullstack Developer with 6+ years building responsive web apps with React, JavaScript, Typescript, Node.js, Python, and Php, Java Spring Boot. I build scalable products that solve real problems for businesses in Nigeria and globally.',
    skills: [
      { name: 'React.js', level: 90, category: 'Frontend' },
      { name: 'Javascript', level: 85, category: 'Frontend' },
      { name: 'TypeScript', level: 80, category: 'Frontend' },
      { name: 'Node.js', level: 85, category: 'Backend' },
      { name: 'Express.js', level: 80, category: 'Backend' },
      { name: 'Python', level: 75, category: 'Backend' },
      { name: 'Php', level: 75, category: 'Backend' },
      { name: 'Java Spring Boot', level: 69, category: 'Backend' },
      { name: 'PostgreSQL', level: 80, category: 'Database' },
      { name: 'MongoDB', level: 85, category: 'Database' },
      { name: 'Docker', level: 75, category: 'DevOps' },
      { name: 'Git', level: 92, category: 'DevOps' },
    ],
    projects: [
      {
        name: 'Aba Market E-commerce',
        tech: 'React.js, Node.js, MongoDB',
        category: 'Fullstack',
        desc: 'E-commerce platform connecting 200+ Aba vendors to customers with Paystack integration.',
        link: '#',
        featured: true,
      },
      {
        name: 'Spring Boot Banking API',
        tech: 'Java, Spring Boot, PostgreSQL',
        category: 'Backend',
        desc: 'Secure REST APIs for mobile banking app with JWT auth and transaction logs.',
        link: '#',
        featured: true,
      },
      {
        name: 'Portfolio Dashboard',
        tech: 'React.js, Python, FastAPI',
        category: 'Fullstack',
        desc: 'Admin dashboard to manage content and view analytics with charts.',
        link: '#',
        featured: false,
      },
      {
        name: 'Weather App',
        tech: 'React.js, Tailwind',
        category: 'Frontend',
        desc: 'Real-time weather app with location search and 7-day forecast.',
        link: '#',
        featured: false,
      },
    ],
  };

  const colors = {
    dark: {
      bg: '#000',
      card: '#111',
      text: '#fff',
      subtext: '#9ca3af',
      accent: '#22c55e',
      border: '#374151',
    },
    light: {
      bg: '#f9fafb',
      card: '#fff',
      text: '#111',
      subtext: '#4b5563',
      accent: '#16a34a',
      border: '#e5e7eb',
    },
  } as const;

  const c = colors[theme];
  const categories = ['All', ...new Set(data.projects.map((p) => p.category))];
  const filteredProjects =
    filter === 'All'
      ? data.projects
      : data.projects.filter((p) => p.category === filter);
  return (
    <div
      style={{
        backgroundColor: c.bg,
        color: c.text,
        minHeight: '100vh',
        fontFamily: 'system-ui, sans-serif',
        transition: 'all 0.3s',
      }}
    >
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: c.accent,
          color: theme === 'dark' ? 'black' : 'white',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '50px',
          cursor: 'pointer',
          fontWeight: 'bold',
          zIndex: 100,
        }}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <div
        style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}
      >
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img
            src={data.photo}
            alt={data.name}
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              border: `4px solid ${c.accent}`,
              objectFit: 'cover',
              marginBottom: '16px',
            }}
          />
          <h1
            style={{
              color: c.accent,
              fontSize: '42px',
              fontWeight: 'bold',
              margin: 0,
              lineHeight: '1.1',
            }}
          >
            SUCCESS <br /> BROWNSON TECH
          </h1>
          <p style={{ fontSize: '20px', color: c.subtext, marginTop: '8px' }}>
            {data.role}
          </p>
          <p style={{ color: c.subtext }}>{data.location}</p>
        </header>

        <nav
          style={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'center',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          {['about', 'skills', 'projects', 'blog', 'contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '10px 20px',
                backgroundColor: activeTab === tab ? c.accent : 'transparent',
                color:
                  activeTab === tab
                    ? theme === 'dark'
                      ? 'black'
                      : 'white'
                    : c.subtext,
                border: `1px solid ${activeTab === tab ? c.accent : c.border}`,
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                textTransform: 'capitalize',
              }}
            >
              {tab}
            </button>
          ))}
        </nav>

        <main style={{ minHeight: '400px' }}>
          {activeTab === 'about' && (
            <section>
              <h2 style={{ color: c.accent, fontSize: '28px' }}>About Me</h2>
              <p style={{ color: c.subtext, lineHeight: '1.8' }}>
                {data.about}
              </p>
            </section>
          )}
          {activeTab === 'skills' && (
            <section>
              <h2 style={{ color: c.accent, fontSize: '28px' }}>My Skills</h2>
              {['Frontend', 'Backend', 'Database', 'DevOps'].map((cat) => (
                <div key={cat} style={{ marginTop: '24px' }}>
                  <h3>{cat}</h3>
                  {data.skills
                    .filter((s) => s.category === cat)
                    .map((skill) => (
                      <div key={skill.name} style={{ marginTop: '12px' }}>
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div
                          style={{
                            backgroundColor: c.border,
                            borderRadius: '10px',
                            height: '8px',
                            overflow: 'hidden',
                          }}
                        >
                          <div
                            style={{
                              width: `${animateSkills ? skill.level : 0}%`,
                              backgroundColor: c.accent,
                              height: '8px',
                              borderRadius: '10px',
                              transition:
                                'width 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </section>
          )}
          {activeTab === 'projects' && (
            <section>
              <h2 style={{ color: c.accent, fontSize: '28px' }}>Projects</h2>
              <div
                style={{
                  display: 'flex',
                  gap: '8px',
                  marginTop: '16px',
                  flexWrap: 'wrap',
                }}
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    style={{
                      padding: '6px 14px',
                      backgroundColor: filter === cat ? c.accent : c.card,
                      color:
                        filter === cat
                          ? theme === 'dark'
                            ? 'black'
                            : 'white'
                          : c.text,
                      border: `1px solid ${c.border}`,
                      borderRadius: '6px',
                      cursor: 'pointer',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              {filteredProjects.map((project) => (
                <div
                  key={project.name}
                  style={{
                    marginTop: '20px',
                    padding: '20px',
                    border: `1px solid ${c.border}`,
                    borderRadius: '12px',
                    backgroundColor: c.card,
                  }}
                >
                  {project.featured && (
                    <span
                      style={{
                        backgroundColor: c.accent,
                        color: theme === 'dark' ? 'black' : 'white',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '12px',
                      }}
                    >
                      Featured
                    </span>
                  )}
                  <h3
                    style={{
                      fontWeight: 'bold',
                      fontSize: '20px',
                      marginTop: '8px',
                    }}
                  >
                    {project.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: c.accent }}>
                    {project.tech}
                  </p>
                  <p style={{ color: c.subtext }}>{project.desc}</p>
                  <a
                    href={project.link}
                    style={{ color: c.accent, textDecoration: 'underline' }}
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </section>
          )}
          {activeTab === 'blog' && (
            <section>
              <h2 style={{ color: c.accent, fontSize: '28px' }}>Blog</h2>
              <div
                style={{
                  marginTop: '20px',
                  padding: '20px',
                  border: `1px solid ${c.border}`,
                  borderRadius: '12px',
                  backgroundColor: c.card,
                }}
              >
                <p style={{ color: c.subtext, fontSize: '14px' }}>
                  Aug 19, 2025
                </p>
                <h3
                  style={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                    marginTop: '8px',
                    color: c.text,
                  }}
                >
                  Debugging a Vercel Build Failure
                </h3>
                <p style={{ color: c.subtext, marginTop: '8px' }}>
                  How a single typo caused a failed Vercel deployment.
                </p>
              </div>
            </section>
          )}

          {activeTab === 'contact' && (
            <section>
              <h2 style={{ color: c.accent, fontSize: '28px' }}>Contact Me</h2>
              <p style={{ color: c.subtext }}>
                Have a project in mind? Send me a message or pay 50% deposit to
                get started.
              </p>

              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={() => setSent(true)}
                style={{
                  marginTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="76d94847-2692-48b6-ad92-4819b1f2b838"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Message from Portfolio"
                />
                <input
                  type="hidden"
                  name="from_name"
                  value="Portfolio Website"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="https://web3forms.com/success"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  style={{
                    padding: '12px',
                    backgroundColor: c.card,
                    border: `1px solid ${c.border}`,
                    borderRadius: '8px',
                    color: c.text,
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onChange={(e) => setClientEmail(e.target.value)}
                  style={{
                    padding: '12px',
                    backgroundColor: c.card,
                    border: `1px solid ${c.border}`,
                    borderRadius: '8px',
                    color: c.text,
                  }}
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  style={{
                    padding: '12px',
                    backgroundColor: c.card,
                    border: `1px solid ${c.border}`,
                    borderRadius: '8px',
                    color: c.text,
                  }}
                />
                <button
                  type="submit"
                  disabled={sent}
                  style={{
                    backgroundColor: sent ? '#555' : c.accent,
                    color: theme === 'dark' ? 'black' : 'white',
                    padding: '14px',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: sent ? 'not-allowed' : 'pointer',
                  }}
                >
                  {sent ? 'Message Sent! ✓' : 'Send Message'}
                </button>
              </form>

              <div
                style={{
                  marginTop: '20px',
                  padding: '16px',
                  border: `1px dashed ${c.border}`,
                  borderRadius: '12px',
                  backgroundColor: c.card,
                }}
              >
                <h3 style={{ margin: '0 0 8px 0' }}>Ready to start?</h3>
                <p
                  style={{
                    color: c.subtext,
                    fontSize: '14px',
                    margin: '0 0 12px 0',
                  }}
                >
                  Pay ₦50,000 deposit to secure your project slot
                </p>
                <input
                  type="email"
                  placeholder="Enter your email for receipt"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: c.bg,
                    border: `1px solid ${c.border}`,
                    borderRadius: '8px',
                    color: c.text,
                    marginBottom: '12px',
                    boxSizing: 'border-box',
                  }}
                />
                {clientEmail ? (
                  <button
                    onClick={() => payWithPaystack(clientEmail)}
                    style={{
                      backgroundColor: '#00C853',
                      color: 'white',
                      padding: '14px',
                      border: 'none',
                      borderRadius: '8px',
                      width: '100%',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                    }}
                  >
                    Pay ₦50,000 Deposit
                  </button>
                ) : (
                  <button
                    disabled
                    style={{
                      backgroundColor: '#555',
                      color: 'white',
                      padding: '14px',
                      border: 'none',
                      borderRadius: '8px',
                      width: '100%',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      cursor: 'not-allowed',
                    }}
                  >
                    Enter email to pay
                  </button>
                )}
                
              </div>
            </section>
          )}
        </main>
      </div>

      <footer
        style={{
          backgroundColor: c.card,
          borderTop: `1px solid ${c.border}`,
          marginTop: '60px',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            padding: '40px 20px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ color: c.accent, fontSize: '20px' }}>{data.name}</h3>
          <p style={{ color: c.subtext }}>
            {data.role} based in {data.location}
          </p>
          <p
            style={{
              marginTop: '30px',
              paddingTop: '20px',
              borderTop: `1px solid ${c.border}`,
              color: c.subtext,
              fontSize: '14px',
            }}
          >
            © 2026 {data.name}. Built by Success
          </p>
        </div>
      </footer>

      <a
        href={data.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '16px',
          right: '16px',
          backgroundColor: '#25D366',
          color: 'white',
          padding: '10px 14px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '14px',
          boxShadow: '0 3px 10px rgba(0,0,0,0.25)',
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        💬 Chat
      </a>
    </div>
  );
}

export default App;
