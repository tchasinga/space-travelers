import { NavLink, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../asset/planet.png';

export default function Navbar() {
  return (
    <header>
      <nav className="nav-section">
        <div className="logHeader">
          <img src={logo} className="space-logo" alt="logo" />
          <h1>Space Travlers&apos; Hub</h1>
        </div>
        <ul className="rockMisPro">
          <CusomeLink to="/myprofile">My Profile</CusomeLink>
        </ul>
      </nav>
    </header>
  );
}

function CusomeLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <NavLink to={to}>{children}</NavLink>
    </li>
  );
}
