import logo from '../asset/planet.png';
import NavLinks from './NavLinks';
import '../index.css';

export default function Navbar() {
  return (
    <header>
      <nav className="nav-section">
        <img src={logo} className="space-logo" alt="logo" />
        <NavLinks />
      </nav>

    </header>
  );
}
