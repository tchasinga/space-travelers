import { Link, useLocation } from 'react-router-dom';
import '../index.css';
import NavStyles from '../styles/NavBar.module.css';

const NavLinks = () => {
  const location = useLocation();

  const getNavLinkStyle = (pathname, style) => {
    if (location.pathname === pathname) {
      return `${style} ${NavStyles.active}`;
    }
    return style;
  };

  const rocketLinkStyle = getNavLinkStyle('/', `${NavStyles.linksStyles}  `);
  const missionsLinkStyle = getNavLinkStyle('/mission', `${NavStyles.linksStyles}`);
  const myProfileLinkStyle = getNavLinkStyle('/profile', `${NavStyles.linksStyles}`);

  return (
    <div>
      <ul className="getNavDesigner">
        <Link className={rocketLinkStyle} to="/">Rocket</Link>
        <Link className={missionsLinkStyle} to="/mission">Mission</Link>
        <span className="upbar"> | </span>
        <Link className={myProfileLinkStyle} to="/profile">My-profile</Link>
      </ul>
    </div>
  );
};

export default NavLinks;
