import { NavLink } from 'react-router-dom';
import logo from '../assets/logo2.png';

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <NavLink className="brand" to="/">
          <img className="brand-logo" src={logo} alt="ShowtimeBro logo" />
        </NavLink>

        <nav className="nav-links" aria-label="Main Navigation">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Events
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;