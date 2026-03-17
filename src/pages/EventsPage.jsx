import EventCard from '../components/EventCard';
import { events } from '../data/events';

function EventsPage() {
  return (
    <section className="container section-gap">
      <div className="section-head">
        <h1>All Events</h1>
        <p>Browse all available events and pick your preferred show.</p>
      </div>

      <div className="event-grid">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}

export default EventsPage;