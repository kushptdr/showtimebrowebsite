import { Link } from 'react-router-dom';

function Banner() {
  return (
    <section className="banner">
      <div className="container banner-content">
        <div className="banner-left">
          <p className="eyebrow">Plan your next outing</p>
          <h1>Book Movies, Concerts & Sports Events in Minutes</h1>
          <p className="banner-text">
            Discover trending shows, compare timings, and complete your booking with a clean,
            simple flow.
          </p>

          <div className="banner-actions">
            <Link className="primary-btn" to="/events">
              Explore Events
            </Link>
            <span className="banner-note">Fast • Simple • Static Demo</span>
          </div>
        </div>

        <article className="banner-highlight" aria-label="Highlights">
          <h3>Why choose ShowtimeBro?</h3>
          <ul>
            <li>All events in one place</li>
            <li>Quick booking flow</li>
            <li>Clear seat and timing selection</li>
          </ul>
          <div className="banner-mini-stats">
            <div>
              <strong>6+</strong>
              <span>Live Listings</span>
            </div>
            <div>
              <strong>3</strong>
              <span>Event Types</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Banner;