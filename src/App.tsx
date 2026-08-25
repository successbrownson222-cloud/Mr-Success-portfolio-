import { useState, useEffect } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
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
    email: 'successbrownson222@gmail.com',
    phone: '+234 912 596 9210',
    whatsapp: 'https://wa.me/2349125969210?text=Hi Success I saw your portfolio and I need a website',
    github: 'https://github.com/successbrownson222-cloud',
    linkedin: 'https://www.linkedin.com/in/success-brownson-290292418',
    resume: 'https://drive.google.com/file/d/1IwSg3fYrlcwhFqMtDga3a_WzEifLDG4_/view?usp=drivesdk',
    photo: 'https://files.catbox.moe/b84keh.jpg',
    about: 'Fullstack Developer with 6 plus years building responsive web apps with React, JavaScript, Typescript, Node.js, Python, and Php, Java Spring Boot. I build scalable products that solve real problems for businesses in Nigeria and globally.',
    skills: [
      { name: 'React.js', level: 90, category: 'Frontend' }, { name: 'Javascript', level: 85, category: 'Frontend' },
      { name: 'TypeScript', level: 80, category: 'Frontend' }, { name: 'Node.js', level: 85, category: 'Backend' },
      { name: 'Express.js', level: 80, category: 'Backend' }, { name: 'Python', level: 75, category: 'Backend' },
      { name: 'Php', level: 75, category: 'Backend' }, { name: 'Java Spring Boot', level: 69, category: 'Backend' },
      { name: 'PostgreSQL', level: 80, category: 'Database' }, { name: 'MongoDB', level: 85, category: 'Database' },
      { name: 'Docker', level: 75, category: 'DevOps' }, { name: 'Git', level: 92, category: 'DevOps' },
    ],
    projects: [
      { name: 'Aba Market E-commerce', tech: 'React.js, Node.js, MongoDB', category: 'Fullstack', desc: 'E-commerce platform connecting 200 plus Aba vendors to customers.', link: '#', featured: true },
      { name: 'Spring Boot Banking API', tech: 'Java, Spring Boot, PostgreSQL', category: 'Backend', desc: 'Secure REST APIs for mobile banking app with JWT auth.', link: '#', featured: true },
      { name: 'Portfolio Dashboard', tech: 'React.js, Python, FastAPI', category: 'Fullstack', desc: 'Admin dashboard to manage content and view analytics.', link: '#', featured: false },
      { name: 'Weather App', tech: 'React.js, Tailwind', category: 'Frontend', desc: 'Real-time weather app with location search.', link: '#', featured: false },
    ],
    pricing: [
      { name: 'Starter', price: '400000 Naira', desc: 'Perfect for small businesses and portfolios', features: ['5 Page Responsive Website', 'WhatsApp Integration', 'Contact Form and Email', '1 Month Support', 'Basic SEO'], popular: false },
      { name: 'Business', price: '900000 Naira', desc: 'Best for e-commerce and serious brands', features: ['Up to 15 Pages', 'E-commerce with Paystack and Paypal', 'Admin Dashboard and Analytics', '3 Months Support', 'Speed Optimization'], popular: true },
      { name: 'Enterprise', price: '2,000,000 Naira plus', desc: 'Custom web apps and business systems', features: ['Custom Web Application', 'API Development and Integration', 'Database Design and Security', '6 Months Support', '24hr Priority Support'], popular: false },
    ]
  };

  const colors = {
    dark: { bg: '#000', card: '#111', text: '#fff', subtext: '#9ca3af', accent: '#22c55e', border: '#374151' },
    light: { bg: '#f9fafb', card: '#fff', text: '#111', subtext: '#4b5563', accent: '#16a34a', border: '#e5e7eb' },
  } as const;

  const c = colors[theme];
  const categories = ['All',...new Set(data.projects.map((p) => p.category))];
  const filteredProjects = filter === 'All'? data.projects : data.projects.filter((p) => p.category === filter);

  return (
    <div style={{ backgroundColor: c.bg, color: c.text, minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <button onClick={() => setTheme(theme === 'dark'? 'light' : 'dark')} style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: c.accent, color: theme === 'dark'? 'black' : 'white', border: 'none', padding: '10px 16px', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold', zIndex: 100 }}>
        {theme === 'dark'? 'Light Mode' : 'Dark Mode'}
      </button>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px' }}>
          <img src={data.photo} alt={data.name} style={{ width: '140px', height: '140px', borderRadius: '50%', border: `4px solid ${c.accent}`, objectFit: 'cover', marginBottom: '16px' }} />
          <h1 style={{ color: c.accent, fontSize: '42px', fontWeight: 'bold', margin: 0 }}>SUCCESS BROWNSON TECH</h1>
          <p style={{ fontSize: '20px', color: c.subtext }}>{data.role}</p>
          <p style={{ color: c.subtext }}>{data.location}</p>
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '16px' }}>
            <a href={data.github} target="_blank" style={{ padding: '10px 16px', backgroundColor: '#24292e', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>GitHub</a>
            <a href={data.linkedin} target="_blank" style={{ padding: '10px 16px', backgroundColor: '#0077b5', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>LinkedIn</a>
            <a href={data.resume} target="_blank" style={{ padding: '10px 16px', backgroundColor: c.accent, color: 'black', borderRadius: '8px', textDecoration: 'none' }}>Resume</a>
          </div>
        </header>
        
        {activeTab === 'projects' && <section><h2 style={{ color: c.accent }}>Projects</h2><div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>{categories.map((cat) => (<button key={cat} onClick={() => setFilter(cat)}>{cat}</button>))}</div>{filteredProjects.map((project) => (<div key={project.name}><h3>{project.name}</h3><p>{project.tech}</p><p>{project.desc}</p><a href={data.whatsapp}>Discuss Project</a></div>))}</section>}
        
        {activeTab === 'pricing' && <section><h2 style={{ color: c.accent }}>Pricing</h2><div>{data.pricing.map((pkg) => (<div key={pkg.name}><h3>{pkg.name}</h3><p>{pkg.price}</p><ul>{pkg.features.map((f) => <li key={f}>{f}</li>)}</ul><a href={data.whatsapp}>Get Started on WhatsApp</a></div>))}</div></section>}

        {activeTab === 'contact' && <section><h2 style={{ color: c.accent }}>Contact Me</h2><form action="https://api.web3forms.com/submit" method="POST" onSubmit={() => setSent(true)}><input type="hidden" name="access_key" value="76d94847-2692-48b6-ad92-4819b1f2b838" /><input name="name" placeholder="Your Name" required /><input name="email" placeholder="Your Email" required /><textarea name="message" placeholder="Your Message" required /><button disabled={sent}>{sent? 'Message Sent' : 'Send Message'}</button></form></section>}
      </div>
      <a href={data.whatsapp} style={{ position: 'fixed', bottom: '16px', left: '16px', backgroundColor: '#25D366', color: 'white', padding: '10px 14px', borderRadius: '50px', textDecoration: 'none' }}>Chat</a>
    </div>
  );
}
export default App;