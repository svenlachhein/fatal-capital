export default function Nav() {
  return (
    <nav className="nav">
      <a href="/" className="nav-logo">
        <span className="nav-logo-name">fatal capital</span>
        <span className="nav-logo-role">Business Playbooks · Band II</span>
      </a>
      <ul className="nav-links">
        <li><a href="#aufbau">Aufbau</a></li>
        <li><a href="#fuer-wen">Für wen</a></li>
        <li><a href="#autor">Autor</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>
      <a className="btn nav-btn" href="https://buy.stripe.com/aFadR81xm3DZ0hq4MC6Zy01" target="_blank" rel="noopener noreferrer">Buch kaufen</a>
    </nav>
  );
}
