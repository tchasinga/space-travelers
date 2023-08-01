import logo from '../asset/planet.png';

export default function Navbar() {
  return (
    <header>
      <nav className="nav-section">
        <img src={logo} className="space-logo" alt="logo" />
      </nav>
    </header>
  );
}
