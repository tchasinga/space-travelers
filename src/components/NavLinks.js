import { Link } from 'react-router-dom';

const NavLinks = () => (
  <div className="NavlinksLI">
    <ul className="getNavLikns">
      <Link to="/">Rockets</Link>
      <Link to="/mission" className="ProfileGet">Mission</Link>
      <Link to="/">Profile</Link>
    </ul>
  </div>
);

export default NavLinks;
