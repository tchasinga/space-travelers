import logo from '../asset/planet.png';
import NavLinks from './NavLiks';

export default function Navbar() {
  return (
    <header>
      <nav className="nav-section">
        <div className="logHeader">
          <img src={logo} className="space-logo" alt="logo" />
          <h1>Space Travlers&apos; Hub</h1>
        </div>
        <NavLinks />
      </nav>
    </header>
  );
}
