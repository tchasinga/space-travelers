import { Link } from 'react-router-dom';
import '../index.css';

const NavLinks = () => (
  <div>
    <ul className="getNavDesigner">
      <Link to="/">Rocket</Link>
      <Link to="/mission">Mission</Link>
      <span className="upbar"> | </span>
      <Link to="/profile">My-profile</Link>
    </ul>
  </div>
);

export default NavLinks;
