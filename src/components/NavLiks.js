import { NavLink, useLocation } from 'react-router-dom';
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
        <NavLink className={rocketLinkStyle} to="/">Rocket</NavLink>
        <NavLink className={missionsLinkStyle} to="/mission">Mission</NavLink>
        <span className="upbar"> | </span>
        <NavLink className={myProfileLinkStyle} to="/profile">My-profile</NavLink>
      </ul>
    </div>
  );
};

export default NavLinks;
