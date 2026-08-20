import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <section style={{ padding: '5rem 1.5rem', background: '#000', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', color: '#4ade80', marginBottom: '3rem' }}>
        Blog
      </h1>
      
      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <Link to="/blog/fixing-vercel-jsx-error" style={{ textDecoration: 'none' }}>
          <div style={{ border: '1px solid rgba(74,222,128,0.2)', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>Aug 19, 2025</p>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white', marginTop: '0.5rem' }}>
              Debugging a Vercel Build Failure: JSX Inside a JS Object
            </h2>
            <p style={{ color: '#d1d5db', marginTop: '0.75rem' }}>
              How a single typo + misplaced JSX caused a failed Vercel deployment and the exact fix.
            </p>
            <span style={{ color: '#4ade80', marginTop: '1rem', display: 'inline-block' }}>
              Read More →
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}