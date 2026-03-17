import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <section>
          <img className="footer-logo" src={logo} alt="ShowtimeBro logo" />
          <h3 className="footer-title">ShowtimeBro</h3>
          <p className="footer-text">
            Your static event booking destination for movies, concerts, and sports experiences.
          </p>
        </section>

        <section>
          <h4 className="footer-heading">Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
          </div>
        </section>

        <section>
          <h4 className="footer-heading">Event Categories</h4>
          <div className="footer-links footer-text">
            <span>Movies</span>
            <span>Concerts</span>
            <span>Sports</span>
          </div>
        </section>

        <section>
          <h4 className="footer-heading">Contact</h4>
          <div className="footer-links footer-text">
            <span>info@showtimebro.com</span>
            <span>9179981316</span>
          </div>
        </section>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 ShowtimeBro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;