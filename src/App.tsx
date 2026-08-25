import { useState, useEffect } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('dark');
  const [filter, setFilter] = useState('All');
  const [sent, setSent] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    if (activeTab === 'skills') {
      setAnimateSkills(false);
      const timer = setTimeout(() => setAnimateSkills(true), 100);
      return () => clearTimeout(timer);
    } else { setAnimateSkills(false); }
  }, [activeTab]);

  useEffect(() => {
    if (sent) { const timer = setTimeout(() => setSent(false), 3000); return () => clearTimeout(timer); }
  }, [sent]);

  const data = {
    name: 'SUCCESS BROWNSON TECH',
    role: 'Fullstack Developer',
    location: 'Abia, Nigeria',
    whatsapp: 'https://wa.me/2349125969210?text=Hi Success I saw your portfolio and I need a website',
    github: 'https://github.com/successbrownson222-cloud',
    linkedin: 'https://www.linkedin.com/in/success-brownson-290292418',
    resume: 'https://drive.google.com/file/d/1IwSg3fYrlcwhFqMtDga3a_WzEifLDG4_/view?usp=drivesdk',
    photo: 'https://files.catbox.moe/b84keh.jpg',
    about: 'Fullstack Developer with 6 plus years building responsive web apps with React, JavaScript, Typescript, Node.js, Python, and Php, Java Spring Boot.',
    skills: [
      { name: 'React.js', level: 90, category: 'Frontend' }, { name: 'Javascript', level: 85, category: 'Frontend' },
      { name: 'TypeScript', level: 80, category: 'Frontend' }, { name: 'Node.js', level: 85, category: 'Backend' },
      { name: 'Express.js', level: 80, category: 'Backend' }, { name: 'Python', level: 75, category: 'Backend' },
      { name: 'Php', level: 75, category: 'Backend' }, { name: 'Java Spring Boot', level: 69, category: 'Backend' },
      { name: 'PostgreSQL', level: 80, category: 'Database' }, { name: 'MongoDB', level: 85, category: 'Database' },
      { name: 'Docker', level: 75, category: 'DevOps' }, { name: 'Git', level: 92, category: 'DevOps' },
    ],
    projects: [
      { name: 'Aba Market E-commerce', tech: 'React.js, Node.js, MongoDB', category: 'Fullstack', desc: 'E-commerce platform connecting 200 plus Aba vendors to customers.', featured: true },
      { name: 'Spring Boot Banking API', tech: 'Java, Spring Boot, PostgreSQL', category: 'Backend', desc: 'Secure REST APIs for mobile banking app with JWT auth.', featured: true },
      { name: 'Portfolio Dashboard', tech: 'React.js, Python, FastAPI', category: 'Fullstack', desc: 'Admin dashboard to manage content and view analytics.', featured: false },
      { name: 'Weather App', tech: 'React.js, Tailwind', category: 'Frontend', desc: 'Real-time weather app with location search.', featured: false },
    ],
    pricing: [
      { name: 'Starter', price: '400000 Naira', features: ['5 Page Responsive Website', 'WhatsApp Integration', 'Contact Form and Email', '1 Month Support', 'Basic SEO'], popular: false },
      { name: 'Business', price: '900000 Naira', features: ['Up to 15 Pages', 'E-commerce with Paystack and Paypal', 'Admin Dashboard and Analytics', '3 Months Support', 'Speed Optimization'], popular: true },
      { name: 'Enterprise', price: '2,000,000 Naira plus', features: ['Custom Web Application', 'API Development and Integration', 'Database Design and Security', '6 Months Support', '24hr Priority Support'], popular: false },
    ]
  };

  const c = theme === 'dark' 
 ? { bg: '#000', card: '#111', text: '#fff', subtext: '#9ca3af', accent: '#22c55e', border: '#374151' }
    : { bg: '#f9fafb', card: '#fff', text: '#111', subtext: '#4b5563', accent: '#16a34a', border: '#e5e7eb' };

  const categories = ['All',...new Set(data.projects.map((p) => p.category))];
  const filteredProjects = filter === 'All'? data.projects : data.projects.filter((p) => p.category === filter);

  return (
    <div style={{ backgroundColor: c.bg, color: c.text, minHeight: '100vh' }}>
      <button onClick={() => setTheme(theme === 'dark'? 'light' : 'dark')} style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: c.accent, color: theme === 'dark'? 'black' : 'white', border: 'none', padding: '10px 16px', borderRadius: '50px' }}>
        {theme === 'dark'? 'Light Mode' : 'Dark Mode'}
      </button>
      
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        <header style={{ textAlign: 'center' }}>
          <img src={data.photo} alt={data.name} style={{ width: '140px', height: '140px', borderRadius: '50%', border: `4px solid ${c.accent}` }} />
          <h1 style={{ color: c.accent, fontSize: '42px' }}>SUCCESS BROWNSON TECH</h1>
          <p>{data.role}</p>
          <p>{data.location}</p>
        </header>

        <nav style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginTop: '40px' }}>
          {['about', 'skills', 'projects', 'pricing', 'contact'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}>{tab}</button>
          ))}
        </nav>

        {activeTab === 'about' && <section><h2>About Me</h2><p>{data.about}</p></section>}
        {activeTab === 'skills' && <section><h2>Skills</h2>{data.skills.map((s) => <div key={s.name}>{s.name}: {s.level}%</div>)}</section>}
        {activeTab === 'projects' && <section><h2>Projects</h2>{filteredProjects.map((p) => <div key={p.name}><h3>{p.name}</h3><p>{p.desc}</p></div>)}</section>}
        {activeTab === 'pricing' && <section><h2>Pricing</h2>{data.pricing.map((pkg) => <div key={pkg.name}><h3>{pkg.name}</h3><p>{pkg.price}</p></div>)}</section>}
        {activeTab === 'contact' && <section><h2>Contact</h2><form action="https://api.web3forms.com/submit" method="POST" onSubmit={() => setSent(true)}><input type="hidden" name="access_key" value="76d94847-2692-48b6-ad92-4819b1f2b838" /><input name="name" required /><button>{sent? 'Sent' : 'Send'}</button></form></section>}
      </div>
      
      <a href={data.whatsapp} target="_blank" rel="noopener noreferrer">Chat</a>
    </div>
  );
}
export default App;