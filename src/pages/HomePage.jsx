import Banner from '../components/Banner';
import EventCard from '../components/EventCard';
import { events } from '../data/events';

function HomePage() {
  const featuredEvents = events.slice(0, 4);

  return (
    <>
      <Banner />

      <section className="container section-gap">
        <div className="section-head">
          <h2>Featured Events</h2>
          <p>Handpicked shows across movies, concerts, and sports.</p>
        </div>

        <div className="event-grid">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;