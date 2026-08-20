import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [filter, setFilter] = useState('All');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const data = {
    name: 'SUCCESS BROWNSON TECH',
    role: 'Fullstack Developer',
    location: 'Abia, Nigeria',
    email: 'successbrownson222@gmail.com',
    phone: '+234 912 596 9210',
    github: 'https://github.com/successbrownson222-cloud',
    linkedin: 'https://www.linkedin.com/in/success-brownson-290292418',
    twitter: 'https://twitter.com/',
    resume: 'https://drive.google.com/file/d/1IwSg3fYrlcwhFqMtDga3a_WzEifLDG4_/view?usp=drivesdk',
    photo: 'https://files.catbox.moe/b84keh.jpg',
    about: 'Fullstack Developer with 6+ years building responsive web apps with React, JavaScript, Typescript, Node.js, Python, and Php, Java Spring Boot. I build scalable products that solve real problems for businesses in Nigeria and globally.',
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
      { name: 'Docker', level: 65, category: 'DevOps' },
      { name: 'Git', level: 90, category: 'DevOps' },
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

  const categories = ['All',...new Set(data.projects.map((p) => p.category))];
  const filteredProjects = filter === 'All'? data.projects : data.projects.filter((p) => p.category === filter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${data.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ backgroundColor: c.bg, color: c.text, minHeight: '100vh', fontFamily: 'system-ui, sans-serif', transition: 'all 0.3s' }}>
      <button onClick={() => setTheme(theme === 'dark'? 'light' : 'dark')} style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: c.accent, color: theme === 'dark'? 'black' : 'white', border: 'none', padding: '10px 16px', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold', zIndex: 100 }}>
        {theme === 'dark'? '☀️' : '🌙'}
      </button>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img src={data.photo} alt={data.name} style={{ width: '140px', height: '140px', borderRadius: '50%', border: `4px solid ${c.accent}`, objectFit: 'cover', marginBottom: '16px' }} />
          <h1 style={{ color: c.accent, fontSize: '42px', fontWeight: 'bold', margin: 0, lineHeight: '1.1' }}>
            SUCCESS <br /> BROWNSON TECH
          </h1>
          <p style={{ fontSize: '20px', color: c.subtext, marginTop: '8px' }}>{data.role}</p>
          <p style={{ color: c.subtext }}>{data.location}</p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={data.github} target="_blank" style={{ backgroundColor: c.accent, color: theme === 'dark'? 'black' : 'white', padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>GitHub</a>
            <a href={data.linkedin} target="_blank" style={{ border: `2px solid ${c.accent}`, color: c.accent, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>LinkedIn</a>
            <a href={data.resume} target="_blank" style={{ border: `2px solid ${c.accent}`, color: c.accent, padding: '10px 20px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Resume</a>
          </div>
        </header>

        <nav style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
          {['about', 'skills', 'projects', 'blog', 'contact'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '10px 20px', backgroundColor: activeTab === tab? c.accent : 'transparent', color: activeTab === tab? (theme === 'dark'? 'black' : 'white') : c.subtext, border: `1px solid ${activeTab === tab? c.accent : c.border}`, borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', textTransform: 'capitalize' }}>
              {tab}
            </button>
          ))}
        </nav>

        <main style={{ minHeight: '400px' }}>
          {activeTab === 'about' && (
            <section>
              <h2 style={{ color: c.accent, fontSize: '28px' }}>About Me</h2>
              <p style={{ color: c.subtext, lineHeight: '1.8' }}>{data.about}</p>
            </section>
          )}

          {activeTab === 'skills' && (
            <section>
              <h2 style={{ color: c.accent, fontSize: '28px' }}>My Skills</h2>
              {['Frontend', 'Backend', 'Database', 'DevOps'].map((cat) => (
                <div key={cat} style={{ marginTop: '24px' }}>
                  <h3>{cat}</h3>
                  {data.skills.filter((s) => s.category === cat).map((skill) => (
                    <div key={skill.name} style={{ marginTop: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div style={{ backgroundColor: c.border, borderRadius: '10px', height: '8px' }}>
                        <div style={{ width: `${skill.level}%`, backgroundColor: c.accent, height: '8px', borderRadius: '10px' }}></div>
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
              <div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setFilter(cat)} style={{ padding: '6px 14px', backgroundColor: filter === cat? c.accent : c.card, color: filter === cat? (theme === 'dark'? 'black' : 'white') : c.text, border: `1px solid ${c.border}`, borderRadius: '6px', cursor: 'pointer' }}>
                    {cat}
                  </button>
                ))}
              </div>
              {filteredProjects.map((project) => (
                <div key={project.name} style={{ marginTop: '20px', padding: '20px', border: `1px solid ${c.border}`, borderRadius: '12px', backgroundColor: c.card }}>
                  {project.featured && <span style={{ backgroundColor: c.accent, color: theme === 'dark'? 'black' : 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '12px' }}>Featured</span>}
                  <h3 style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '8px' }}>{project.name}</h3>
                  <p style={{ fontSize: '14px', color: c.accent }}>{project.tech}</p>
                  <p style={{ color: c.subtext }}>{project.desc}</p>
                  <a href={project.link} style={{ color: c.accent, textDecoration: 'underline' }}>View Project →</a>
                </div>
              ))}
            </section>
          )}

          {activeTab === 'blog' && (
            <section>
              <h2 style={{ color: c.accent, fontSize: '28px' }}>Blog</h2>
              <div style={{ marginTop: '20px', padding: '20px', border: `1px solid ${c.border}`, borderRadius: '12px', backgroundColor: c.card }}>
                <p style={{ color: c.subtext, fontSize: '14px' }}>Aug 19, 2025</p>
                <h3 style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '8px', color: c.text }}>
                  Debugging a Vercel Build Failure: JSX Inside a JS Object
                </h3>
                <p style={{ color: c.subtext, marginTop: '8px' }}>
                  How a single typo + misplaced JSX caused a failed Vercel deployment and the exact fix.
                </p>
                <div style={{ marginTop: '12px', backgroundColor: c.bg, padding: '12px', borderRadius: '8px', fontFamily: 'monospace', fontSize: '13px', color: c.text }}>
                  Error: Module parse failed: Unexpected token<br />
                  Fix: Keep data pure. Don't put JSX in objects.
                </div>
                <p style={{ color: c.subtext, marginTop: '12px' }}>Full breakdown coming soon...</p>
              </div>
            </section>
          )}

          {activeTab === 'contact' && (
            <section>
              <h2 style={{ color: c.accent, fontSize: '28px' }}>Contact Me</h2>
              <p style={{ color: c.subtext }}>Have a project in mind? Send me a message.</p>
              <form onSubmit={handleSubmit} style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value })} required style={{ padding: '12px', backgroundColor: c.card, border: `1px solid ${c.border}`, borderRadius: '8px', color: c.text }} />
                <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value })} required style={{ padding: '12px', backgroundColor: c.card, border: `1px solid ${c.border}`, borderRadius: '8px', color: c.text }} />
                <textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value })} required style={{ padding: '12px', backgroundColor: c.card, border: `1px solid ${c.border}`, borderRadius: '8px', color: c.text }} />
                <button type="submit" style={{ backgroundColor: c.accent, color: theme === 'dark'? 'black' : 'white', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                  {sent? 'Message Sent!' : 'Send Message'}
                </button>
              </form>
            </section>
          )}
        </main>
      </div>

      <footer style={{ backgroundColor: c.card, borderTop: `1px solid ${c.border}`, marginTop: '60px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
          <h3 style={{ color: c.accent, fontSize: '20px' }}>{data.name}</h3>
          <p style={{ color: c.subtext }}>{data.role} based in {data.location}</p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '16px' }}>
            <a href={data.github} target="_blank" style={{ color: c.subtext, textDecoration: 'none' }}>GitHub</a>
            <a href={data.linkedin} target="_blank" style={{ color: c.subtext, textDecoration: 'none' }}>LinkedIn</a>
            <a href={data.twitter} target="_blank" style={{ color: c.subtext, textDecoration: 'none' }}>Twitter</a>
            <a href={`mailto:${data.email}`} style={{ color: c.subtext, textDecoration: 'none' }}>Email</a>
          </div>
          <p style={{ marginTop: '30px', paddingTop: '20px', borderTop: `1px solid ${c.border}`, color: c.subtext, fontSize: '14px' }}>
            © 2026 {data.name}. Built by Success
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;