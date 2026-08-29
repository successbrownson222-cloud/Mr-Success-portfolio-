import { useState, useEffect } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [theme, setTheme] = useState('dark');
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

  // PRO STAR RATING COMPONENT
  const StarRating = ({ rating = 5 }) => {
    return (
      <div style={{ color: '#fbbf24', fontSize: '20px', marginBottom: '8px' }}>
        {[...Array(5)].map((_, i) => (
          <span key={i}>{i < rating? '★' : '☆'}</span>
        ))}
      </div>
    )
  }

  const payWithPaystack = (email: string, key: string) => {
    // @ts-ignore
    const handler = window.PaystackPop.setup({
      key: key,
      email: email,
      amount: 5000000,
      currency: 'NGN',
      ref: '' + Math.floor(Math.random() * 1000000 + 1),
      callback: function (response: any) {
        alert('Payment complete! Reference: ' + response.reference);
      },
      onClose: function () {
        alert('Window closed');
      },
    });
    handler.openIframe();
  };

  const data = {
    name: 'SUCCESS BROWNSON TECH',
    role: 'Fullstack Developer',
    location: 'Abia, Nigeria',
    email: 'successbrownson222@gmail.com',
    phone: '+234 912 596 9210',
    whatsapp: 'https://wa.me/2349125969210?text=Hi%20Success%20I%20saw%20your%20portfolio%20and%20I%20need%20a%20website',
    calendar: 'https://calendar.app.google/xyz123',
    paystackKey: 'pk_test_48465c9101ef5216a9d976b8ae4260493b45984c',
    github: 'https://github.com/successbrownson222-cloud',
    linkedin: 'https://www.linkedin.com/in/success-brownson-290292418',
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
      { name: 'Docker', level: 75, category: 'DevOps' },
      { name: 'Git', level: 92, category: 'DevOps' },
    ],
    projects: [
      { name: 'Aba Market E-commerce', tech: 'React.js, Node.js, MongoDB', category: 'Fullstack', desc: 'E-commerce platform connecting 200+ Aba vendors to customers with Paystack integration.', link: '#', featured: true },
      { name: 'Spring Boot Banking API', tech: 'Java, Spring Boot, PostgreSQL', category: 'Backend', desc: 'Secure REST APIs for mobile banking app with JWT auth and transaction logs.', link: '#', featured: true },
      { name: 'Portfolio Dashboard', tech: 'React.js, Python, FastAPI', category: 'Fullstack', desc: 'Admin dashboard to manage content and view analytics with charts.', link: '#', featured: false },
      { name: 'Weather App', tech: 'React.js, Tailwind', category: 'Frontend', desc: 'Real-time weather app with location search and 7-day forecast.', link: '#', featured: false },
    ],
    pricing: [
      { name: 'Starter Website', price: '₦250,000', features: ['5 Pages Responsive', 'Contact Form + WhatsApp', 'Basic SEO Setup', '1 Month Support', 'Delivery: 7 Days'], popular: false },
      { name: 'Business Website', price: '₦550,000', features: ['10 Pages Responsive', 'Blog + CMS', 'Paystack Integration', 'Admin Dashboard', 'Advanced SEO + 3 Months Support'], popular: true },
      { name: 'E-commerce + Web App', price: '₦1,200,000', features: ['Unlimited Products', 'Payment + Inventory', 'Admin + Analytics', 'Custom Features', '6 Months Support'], popular: false },
    ],
    testimonials: [
      { name: "UNN Final Year Project", review: "Delivered a full-stack student portal with authentication. Project scored 92% and was used as a reference.", role: "Academic Project", rating: 5 },
      { name: "Local Business Website", review: "Built a responsive site for a family business. Now customers can view products and reach us on WhatsApp directly.", role: "Small Business", rating: 5 },
      { name: "This Portfolio", review: "Designed, built, and got indexed on Google in 24 hours. Clean, fast, and converts visitors to clients.", role: "Personal Project", rating: 5 }
    ],
    caseStudies: [
      { title: "E-commerce Store for Aba Fashion Brand", problem: "No online store. Losing customers to competitors.", solution: "Built full e-commerce site with Paystack and admin dashboard.", result: "₦1.2M in sales within 30 days of launch." },
      { title: "Corporate Website Redesign", problem: "Old website was slow and not mobile friendly.", solution: "Redesigned with modern UI, SEO optimized, and 3x faster load speed.", result: "300% increase in leads from Google search." }
    ],
    faq: [
      { q: "How long does it take to build a website?", a: "Landing pages: 3 days. Business websites: 7 days. E-commerce: 14 days." },
      { q: "Do you provide hosting and domain?", a: "Yes. I can set up everything for you or work with your existing provider." },
      { q: "What is your payment structure?", a: "50% upfront to start, 50% on delivery. Payment plans available for projects above ₦300k." },
      { q: "Do you offer after-launch support?", a: "Yes. All packages include 30 days of free support and bug fixes." }
    ]
  };

  const colors = {
    dark: { bg: '#000', card: '#111', text: '#fff', subtext: '#9ca3af', accent: '#22c55e', border: '#374151' },
    light: { bg: '#f9fafb', card: '#fff', text: '#111', subtext: '#4b5563', accent: '#16a34a', border: '#e5e7eb' },
  } as const;

  const c = colors[theme as keyof typeof colors];
  const categories = ['All',...new Set(data.projects.map((p) => p.category))];
  const filteredProjects = filter === 'All'? data.projects : data.projects.filter((p) => p.category === filter);
  const tabs = ['about', 'skills', 'projects', 'pricing', 'testimonials', 'cases', 'faq', 'blog', 'contact'];

  return (
    <div style={{ backgroundColor: c.bg, color: c.text, minHeight: '100vh', fontFamily: 'system-ui, sans-serif', transition: 'all 0.3s' }}>
      <button onClick={() => setTheme(theme === 'dark'? 'light' : 'dark')} style={{ position: 'fixed', top: '20px', right: '20px', backgroundColor: c.accent, color: theme === 'dark'? 'black' : 'white', border: 'none', padding: '10px 16px', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold', zIndex: 100 }}>
        {theme === 'dark'? '☀️' : '🌙'}
      </button>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        <header style={{ textAlign: 'center', marginBottom: '40px', paddingTop: '40px' }}>
          <img src={data.photo} alt={data.name} style={{ width: '160px', height: '160px', borderRadius: '50%', border: `4px solid ${c.accent}`, objectFit: 'cover', marginBottom: '20px' }} />
          <h1 style={{ color: c.accent, fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 'bold', margin: 0, lineHeight: '1.2', letterSpacing: '1px' }}>{data.name}</h1>
          <p style={{ fontSize: 'clamp(16px, 2.5vw, 22px)', color: c.subtext, marginTop: '10px' }}>{data.role}</p>
          <p style={{ color: c.subtext, marginBottom: '24px', fontSize: 'clamp(14px, 2vw, 16px)' }}>{data.location}</p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '600px', margin: '0 auto' }}>
            <a href={data.github} target="_blank" rel="noopener noreferrer" style={{ padding: '12px 24px', backgroundColor: c.card, color: c.text, border: `1px solid ${c.border}`, borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>💻 GitHub</a>
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" style={{ padding: '12px 24px', backgroundColor: c.card, color: c.text, border: `1px solid ${c.border}`, borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>💼 LinkedIn</a>
            <a href={`mailto:${data.email}`} style={{ padding: '12px 24px', backgroundColor: c.card, color: c.text, border: `1px solid ${c.border}`, borderRadius: '12px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>📧 Email</a>
            <a href={data.resume} target="_blank" rel="noopener noreferrer" style={{ padding: '12px 24px', backgroundColor: c.accent, color: theme === 'dark'? 'black' : 'white', border: `1px solid ${c.accent}`, borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', fontSize: '15px' }}>📄 Resume</a>
          </div>
        </header>

        <nav style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: '10px 20px', backgroundColor: activeTab === tab? c.accent : 'transparent', color: activeTab === tab? theme === 'dark'? 'black' : 'white' : c.subtext, border: `1px solid ${activeTab === tab? c.accent : c.border}`, borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', textTransform: 'capitalize' }}>{tab}</button>
          ))}
        </nav>

        <main style={{ minHeight: '400px' }}>
          {activeTab === 'about' && <section><h2 style={{ color: c.accent, fontSize: '28px' }}>About Me</h2><p style={{ color: c.subtext, lineHeight: '1.8' }}>{data.about}</p></section>}

          {activeTab === 'skills' && <section><h2 style={{ color: c.accent, fontSize: '28px' }}>My Skills</h2>{['Frontend', 'Backend', 'Database', 'DevOps'].map((cat) => (<div key={cat} style={{ marginTop: '24px' }}><h3>{cat}</h3>{data.skills.filter((s) => s.category === cat).map((skill) => (<div key={skill.name} style={{ marginTop: '12px' }}><div style={{ display: 'flex', justifyContent: 'space-between' }}><span>{skill.name}</span><span>{skill.level}%</span></div><div style={{ backgroundColor: c.border, borderRadius: '10px', height: '8px', overflow: 'hidden' }}><div style={{ width: `${animateSkills? skill.level : 0}%`, backgroundColor: c.accent, height: '8px', borderRadius: '10px', transition: 'width 1.4s' }}></div></div></div>))}</div>))}</section>}

          {activeTab === 'projects' && <section><h2 style={{ color: c.accent, fontSize: '28px' }}>Projects</h2><div style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>{categories.map((cat) => (<button key={cat} onClick={() => setFilter(cat)} style={{ padding: '6px 14px', backgroundColor: filter === cat? c.accent : c.card, color: filter === cat? theme === 'dark'? 'black' : 'white' : c.text, border: `1px solid ${c.border}`, borderRadius: '6px', cursor: 'pointer' }}>{cat}</button>))}</div>{filteredProjects.map((project) => (<div key={project.name} style={{ marginTop: '20px', padding: '20px', border: `1px solid ${c.border}`, borderRadius: '12px', backgroundColor: c.card }}>{project.featured && (<span style={{ backgroundColor: c.accent, color: theme === 'dark'? 'black' : 'white', padding: '4px 10px', borderRadius: '4px', fontSize: '12px' }}>Featured</span>)}<h3 style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '8px' }}>{project.name}</h3><p style={{ fontSize: '14px', color: c.accent }}>{project.tech}</p><p style={{ color: c.subtext }}>{project.desc}</p></div>))}</section>}

          {activeTab === 'pricing' && <section><h2 style={{ color: c.accent, fontSize: '28px', textAlign: 'center' }}>My Pricing</h2><div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>{data.pricing.map((plan) => (<div key={plan.name} style={{ padding: '24px', border: `2px solid ${plan.popular? c.accent : c.border}`, borderRadius: '16px', backgroundColor: c.card, position: 'relative' }}>{plan.popular && <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: c.accent, color: theme === 'dark'? 'black' : 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>MOST POPULAR</span>}<h3 style={{ fontSize: '22px', fontWeight: 'bold', textAlign: 'center' }}>{plan.name}</h3><p style={{ fontSize: '36px', fontWeight: 'bold', color: c.accent, textAlign: 'center', margin: '16px 0' }}>{plan.price}</p><ul style={{ listStyle: 'none', padding: 0, margin: '20px 0' }}>{plan.features.map((f) => <li key={f} style={{ padding: '8px 0', color: c.subtext }}>✓ {f}</li>)}</ul><button onClick={() => setActiveTab('contact')} style={{ width: '100%', padding: '14px', backgroundColor: c.accent, color: theme === 'dark'? 'black' : 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Get Started</button></div>))}</div></section>}

          {activeTab === 'testimonials' && <section><h2 style={{ color: c.accent, fontSize: '28px', textAlign: 'center' }}>What People Say</h2><div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginTop: '24px' }}>{data.testimonials.map((t) => (<div key={t.name} style={{ padding: '20px', backgroundColor: c.card, borderRadius: '12px', border: `1px solid ${c.border}` }}>
            {/* PRO STAR RATING HERE */}
            <StarRating rating={t.rating} />
            <p style={{ fontStyle: 'italic', color: c.subtext, margin: '12px 0' }}>"{t.review}"</p><h4 style={{ fontWeight: 'bold' }}>{t.name}</h4><p style={{ fontSize: '14px', color: c.subtext }}>{t.role}</p></div>))}</div></section>}

          {activeTab === 'cases' && <section><h2 style={{ color: c.accent, fontSize: '28px', textAlign: 'center' }}>Case Studies</h2><div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '24px' }}>{data.caseStudies.map((cs) => (<div key={cs.title} style={{ padding: '20px', backgroundColor: c.card, borderRadius: '12px', border: `1px solid ${c.border}` }}><h3 style={{ fontWeight: 'bold', fontSize: '20px' }}>{cs.title}</h3><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '12px' }}><div><p style={{ color: '#ef4444', fontWeight: 'bold' }}>Problem</p><p style={{ color: c.subtext }}>{cs.problem}</p></div><div><p style={{ color: '#3b82f6', fontWeight: 'bold' }}>Solution</p><p style={{ color: c.subtext }}>{cs.solution}</p></div><div><p style={{ color: '#22c55e', fontWeight: 'bold' }}>Result</p><p style={{ color: c.subtext }}>{cs.result}</p></div></div></div>))}</div></section>}

          {activeTab === 'faq' && <section><h2 style={{ color: c.accent, fontSize: '28px', textAlign: 'center' }}>Frequently Asked Questions</h2><div style={{ marginTop: '24px' }}>{data.faq.map((item) => (<details key={item.q} style={{ backgroundColor: c.card, marginBottom: '12px', padding: '16px', borderRadius: '12px', border: `1px solid ${c.border}` }}><summary style={{ fontWeight: 'bold', cursor: 'pointer' }}>{item.q}</summary><p style={{ marginTop: '8px', color: c.subtext }}>{item.a}</p></details>))}</div></section>}

          {activeTab === 'blog' && <section><h2 style={{ color: c.accent, fontSize: '28px' }}>Blog</h2><div style={{ marginTop: '20px', padding: '20px', border: `1px solid ${c.border}`, borderRadius: '12px', backgroundColor: c.card }}><p style={{ color: c.subtext, fontSize: '14px' }}>Aug 19, 2025</p><h3 style={{ fontWeight: 'bold', fontSize: '20px', marginTop: '8px', color: c.text }}>Debugging a Vercel Build Failure</h3><p style={{ color: c.subtext, marginTop: '8px' }}>How a single typo caused a failed Vercel deployment.</p></div></section>}

          {activeTab === 'contact' && <section><h2 style={{ color: c.accent, fontSize: '28px' }}>Contact Me</h2><p style={{ color: c.subtext }}>Have a project in mind? Send me a message or pay 50% deposit to get started.</p><form action="https://api.web3forms.com/submit" method="POST" onSubmit={() => setSent(true)} style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}><input type="hidden" name="access_key" value="76d94847-2692-48b6-ad92-4819b1f2b838" /><input type="text" name="name" placeholder="Your Name" required style={{ padding: '12px', backgroundColor: c.card, border: `1px solid ${c.border}`, borderRadius: '8px', color: c.text }} /><input type="email" name="email" placeholder="Your Email" required onChange={(e) => setClientEmail(e.target.value)} style={{ padding: '12px', backgroundColor: c.card, border: `1px solid ${c.border}`, borderRadius: '8px', color: c.text }} /><textarea name="message" placeholder="Your Message" rows={4} required style={{ padding: '12px', backgroundColor: c.card, border: `1px solid ${c.border}`, borderRadius: '8px', color: c.text }} /><button type="submit" disabled={sent} style={{ backgroundColor: sent? '#555' : c.accent, color: theme === 'dark'? 'black' : 'white', padding: '14px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: sent? 'not-allowed' : 'pointer' }}>{sent? 'Message Sent! ✓' : 'Send Message'}</button></form><div style={{ marginTop: '20px', padding: '16px', border: `1px dashed ${c.border}`, borderRadius: '12px', backgroundColor: c.card }}><h3>Ready to start?</h3><p style={{ color: c.subtext, fontSize: '14px' }}>Pay ₦50,000 deposit to secure your project slot</p><input type="email" placeholder="Enter your email for receipt" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} required style={{ width: '100%', padding: '12px', backgroundColor: c.bg, border: `1px solid ${c.border}`, borderRadius: '8px', color: c.text, marginBottom: '12px', boxSizing: 'border-box' }} />{clientEmail? (<button onClick={() => payWithPaystack(clientEmail, data.paystackKey)} style={{ backgroundColor: '#00C853', color: 'white', padding: '14px', border: 'none', borderRadius: '8px', width: '100%', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Pay ₦50,000 Deposit</button>) : (<button disabled style={{ backgroundColor: '#555', color: 'white', padding: '14px', border: 'none', borderRadius: '8px', width: '100%', fontSize: '16px', fontWeight: 'bold', cursor: 'not-allowed' }}>Enter email to pay</button>)}</div></section>}
        </main>
      </div>

    <footer style={{ backgroundColor: c.card, borderTop: `1px solid ${c.border}`, marginTop: '60px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
          <p style={{ marginTop: '30px', paddingTop: '20px', borderTop: `1px solid ${c.border}`, color: c.subtext, fontSize: '14px' }}>© 2026 {data.name}. Built by Success</p>
        </div>
      </footer>

      {/* Floating Buttons - ORIGINAL GOOD POSITION */}
      <div style={{ 
        position: 'fixed', 
        bottom: '80px',  
        right: '16px', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '10px',
        zIndex: 999 
      }}>
        <a 
          href={data.calendar}
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            backgroundColor: '#2563eb',
            color: 'white', 
            padding: '10px 16px',
            borderRadius: '50px', 
            textDecoration: 'none', 
            fontWeight: '600',
            fontSize: '14px',
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px',
            border: 'none'
          }}>
          📅 Book Call
        </a>
        <a 
          href={data.whatsapp} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ 
            backgroundColor: '#22c55e',
            color: 'white', 
            padding: '10px 16px',
            borderRadius: '50px', 
            textDecoration: 'none', 
            fontWeight: '600',
            fontSize: '14px',
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px',
            border: 'none'
          }}>
          💬 Chat
        </a>
      </div>
    </div>
  );
}