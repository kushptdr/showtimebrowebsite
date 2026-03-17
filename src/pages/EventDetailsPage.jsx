import { Link, useParams } from 'react-router-dom';
import { getEventById } from '../data/events';

function EventDetailsPage() {
  const { eventId } = useParams();
  const event = getEventById(eventId);

  if (!event) {
    return (
      <section className="container section-gap">
        <h2>Event not found</h2>
        <Link className="secondary-btn" to="/events">
          Back to Events
        </Link>
      </section>
    );
  }

  return (
    <section className="container section-gap details-layout">
      <img className="details-image" src={event.image} alt={event.title} />

      <article className="details-card">
        <span className="event-badge">{event.category}</span>
        <h1>{event.title}</h1>
        <p className="details-text">{event.description}</p>

        <ul className="details-list">
          <li>
            <strong>Venue:</strong> {event.venue}
          </li>
          <li>
            <strong>Language:</strong> {event.language}
          </li>
          <li>
            <strong>Duration:</strong> {event.duration}
          </li>
          <li>
            <strong>Rating:</strong> {event.rating}
          </li>
        </ul>

        <Link className="primary-btn" to={`/booking/${event.id}`}>
          Proceed to Booking
        </Link>
      </article>
    </section>
  );
}

export default EventDetailsPage;