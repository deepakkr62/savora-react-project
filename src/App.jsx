function App() {
  return (
    <header className="site-header">
      <a className="brand" href="#main" aria-label="Savora home">
        <span className="brand-mark" aria-hidden="true">S</span>
        <span>savora</span>
      </a>

      <nav className="main-nav" aria-label="Main navigation">
        <a className="nav-link active" href="#main">Main</a>
        <a className="nav-link" href="#help">Help</a>
        <a className="nav-link" href="#contact">Contact</a>
      </nav>

      <div className="account-actions">
        <a className="login-link" href="#login">Log in</a>
        <a className="signup-link" href="#signup">Sign up</a>
      </div>
    </header>
  )
}

export default App
